// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// get method
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });


  //server start
  // app.listen(3000, () => {
  //   console.log('Server started on port 3000');
  // });

  //post method
  // app.post('/resources:id', (req, res) => {
  //   const { name } = req.body;

    // Create new resource with provided name
  //   res.status(201).json({ message: `Created resource with name ${name}` });
  // });





  
// This index.js file is the main entry point of your Node.js application. It connects to your MongoDB database using Mongoose, sets up your Express application, and starts your server.
// required is a function in Node.js that is used to import module
// In JavaScript, when you use the dot notation (.) like in .config(), it's typically used to access properties or methods of an object.
// require('dotenv'): This loads the dotenv package/module, making it available for use in your code.

//This line includes the dotenv module. dotenv is a zero-dependency(without relying on any external libraries.) module that loads environment variables from a .env file into process.env. This allows you to keep sensitive data 

 require('dotenv').config();

//the express module is imported into the application using the Node.js require function. 
//importing the express module,create routes, handle HTTP requests, manage middleware, and perform various tasks 
const express = require('express');

//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a simple, schema-based solution to model your application data. typecasting, validation, query building, business logic hooks
const mongoose = require('mongoose');


//creating a new constant variable called mongoString. We're assigning the value. process.env is a built-in Node.js object that contains the user environment.Environment variables are typically used to store configuration settings, such as the URL of a database or an API key.DATABASE_URL likely contains the address or location of a database that your program wants to connect to.
const mongoString = process.env.DATABASE_URL;


//The line mongoose.connect(mongoString); is a piece of code that connects your application to a MongoDB database using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
mongoose.connect(mongoString);

//database: The name of the variable we are declaring. This variable will hold the connection to the MongoDB database.
const database = mongoose.connection;

//event listner, Hey, database, if an error happens, do something
database.on('error', (error) => {
    console.log(error)
})
//event listner , method called once , it happens only for once, if it is connected log "data base connected"
database.once('connected', () => {
    console.log('Database Connected');
})

//app: The name of the variable we are declaring. This variable will hold the Express application instance.  express(): A function that returns a new Express application instance. The express() function is used to create a new Express application
const app = express();

//app.use(express.json()) is a middleware function in Express. It is used to parse incoming requests with JSON payload.  app.use(): This method is used to register middleware functions with the Express app. It takes a callback function, which is called on every request.  

//express.json(): This is a built-in middleware function in Express that parses the JSON payload of the request body. It is provided by the body-parser module, which is now integrated into Express itself.

//So, when you add app.use(express.json()) to your Express app, it means that Express will automatically parse the JSON payload of every incoming request with a Content-Type of application/json.
app.use(express.json());

// this code is used to create a web server that listens on a specified port for incoming HTTP requests. The () => { console.log(Server Started at ${3000}) } part is a callback function that is executed once the server has started successfully. In this case, it simply logs a message to the console indicating that the server has started and is listening on port 3000.
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

/*In this case, the require function is used to import the routes for handling the API endpoints related to employee data.
'./routes/employeeroutes': This is the file path of the module being imported*/
const routes = require('./routes/employeeroutes');

//When a client makes a request to the server with a URL that starts with /api, Express.js will pass the request and response objects to the middleware function defined in routes. The middleware function will then process the request, and either send a response back to the client or pass the request along to the next middleware function in the stack
app.use('/api', routes)

