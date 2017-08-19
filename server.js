const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const _ = require('lodash');

require('./db/config');
const {
	User
} = require('./db/userModel');

const mongoose = require('./db/mongConfig');

const app = express();

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

let port = process.env.PORT;

app.post('/signIn',(req,res,next)=>{
	let body = _.pick(req.body,['name','password']);
	let user = new User(body);
	let validationResult =  user.validateSync();
	console.log(validationResult);
	user.save().then(docs =>{
		return docs.genToken();
	}).then(token =>{
		if(!token){
			return Promise.reject();
		}
		res.header('x-auth',token).status(200).send();
	}).catch(err => res.status(400).send());
})

app.use(authe)
app.post('/login',)

app.get('*',(req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
    
app.listen(port, () => {
	console.log(`App is running on ${port} yea`);
})
