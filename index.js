const express=require('express');
const app=express();
const port=8080;
const db=require('./config/mongoose');

app.use(express.urlencoded());

//below line uses the routes to different controlers for the application
app.use('/',require('./routes'));

//ejs view engine is used 
app.set('view engine','ejs');
app.set('views','./views');

//static files(css,js) mentioned below
app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log("error listening to express");
        return;
    }
})

//this file is the root file gets executed 