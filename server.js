const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'public');

app.use(express.static(publicPath));

let port = process.env.PORT || 3000;


app.get('*',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'public','index.html'));
})

app.post('/save',(req,res)=>{
	console.log(req.data);
	res.status(200).send('yea');
})

app.listen(port,()=>{
	console.log(`App is running on ${port} yea`);
})
