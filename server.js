// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser  = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
// const { route } = require("express/lib/application");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;
// Spin up the server
const server = app.listen(port, listening);
function listening(){
    console.log(`running on ${port}`);
}
// app.get('/', (req, res)  =>{
//     res.send("welcome to your server")
// })
// get  route
app.get('http://localhost:3000/all',sendData);

// Callback function to complete GET '/all'
function sendData(req,res){
    res.status(200).send(projectData);
    // projectData = [];
    // console.log('Im in get request');
}
// console.log(projectData);

// post route
// app.post('/',callBack);
// function callBack(req,res){
//     // console.log(req.body.zipcode)
//     res.send('post received');
// }

// post a feel
// const  data=[];
app.post('http://localhost:3000/add',addData);
function addData(req,res){
    // let data =  req.body;
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    console.log(projectData);
    res.send(projectData);

    // data.push(req.body);
    // console.log('server side data', data)

    // projectData["date"] =  data.date;
    // projectData["temp"] = data.temp;
    // projectData["feel"] = data.feeling;
}
    // Callback to debug

// Initialize all route with a callback function


// Post Route
// Setup Server
////////////////
//comments only

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
