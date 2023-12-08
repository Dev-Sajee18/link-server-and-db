
//const mongoose: Here, we're using require to import(odm) a library called mongoose. This library helps us work with data in a special way when we're using MongoDB, like a toolbox full of helpful tools.
const mongoose = require('mongoose');


//const dataSchema: This line creates a blueprint for how our data should look in the database. It's like making a plan for what information we want to store. Here, we're saying that our data will have a name (which should be a string), an age (which should be a number), and a product (also a string).
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    product: {
        required: true,
        type: String
    }
})

//module.exports: In Node.js, module is an object representing the current module, and exports is a reference to what the module exports
//This function call creates a new Mongoose model with the name 'Data'. The model uses the 'dataSchema' schema, which defines the structure of the documents in the 'Data' collection.
//In the context of Mongoose and MongoDB, a "model" represents a structured way to interact with a MongoDB collection.
//A model defines the shape of the documents within a collection and provides an interface for querying and manipulating those documents.
module.exports = mongoose.model('Data', dataSchema)