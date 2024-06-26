const express = require('express');

const { ServerConfig} = require('./config');
const apiRoutes = require('./routes');


const app = express();

app.use(express.json());        // helps to parse incoming json request ,without it express is not able to parse incoming json request
app.use(express.urlencoded({extended: true}));  


app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    
});


/**
 * 
 * {extended: true} choose between parsing library only 
 * 
 * 
 */