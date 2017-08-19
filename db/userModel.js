const mongoose = require('mongoose');
const {
	Schema
} = require('mongoose');
const noteSchema = require('./noteSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('./config');


const userSchema = new Schema({
	name: {
		type: String,
		minlength: 4,
		required: true,
		trim: true,
		unique: [true, 'Name already exist,choose another'],
	},
	password: {
		type: String,
		minlength: 4,
		required: true,
		trim: true,
	},
	noteCount: Number,
	notes: [noteSchema],
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]

})

userSchema.methods.genToken = function () {

	let user = this;
	let access = "auth";
	let token = jwt.sign({
		_id: user._id.toHexString(),
		access,
	}, process.env.JWT_SECRET).toString();

	user.tokens.push({
		access,
		token,
	});

	return user.save().then(() => {
		return token;
	})
}

userSchema.pre('save', function (next) {
	if (this.password) {
		if (this.isModified('password')) {
			bcrypt.genSalt(10, (err, salt) => {
				if (err) {
					return next(err);
				}
				bcrypt.hash(this.password, salt, (err, hash) => {
					if (err) {
						return next(err);
					}
					this.password = hash;
					next();
				})
			})
		}
	}
})

userSchema.methods.validatePassword = function(password){
	 bcrypt.compare(this.password,password).then((res)=>{
		 if(!res){
			 return Promise.reject();
		 }
		 Promise.resolve(this);
	 }).catch(err => err);
}

const User = mongoose.model('user', userSchema);



module.exports = {
	User
}
