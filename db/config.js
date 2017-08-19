const env = process.env.NODE_ENV || "development";

if(env === "test" || env === "development"){
	const configFile = require('./config.json');
	let envConfig = configFile[env];
	
	  Object.keys(envConfig).map(key=>{
          process.env[key] = envConfig[key];
	  })						  
}