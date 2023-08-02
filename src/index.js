const express = require('express');
const {PORT} = require('./Config/serverConfig');
const bodyParser = require('body-parser');
const connect = require('./Config/dataBase');
const domainRoute = require('./Routes/domainRoute');

const setupAndStartServer = async () => {

    //create express object

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // Register domainRoutes
    app.use('/domains', domainRoute);
     ;
    
    
    app.listen(3001, async () =>{
        console.log(`Server started at ${3001}`);
        await connect();
       
        console.log('Mongodb connected');
    })


}

setupAndStartServer();