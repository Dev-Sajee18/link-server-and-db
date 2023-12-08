

//This line imports the Express framework into the file. Express is a web application framework for Node.js that simplifies the process of building web applications by providing various utility methods and features for handling HTTP requests, routing, middleware, and more.
const express = require('express');

//Here, a router object is created using express.Router(). Routers in Express are used to create modular, mountable route handlers. They allow you to group routes together based on a common path or functionality. This router object will be used to define routes specific to this file or module.
const router = express.Router()

//module.exports is a special object in Node.js modules that is used to expose functionality or data from a module. In this case, it's being set to router, meaning that when another file require()s this file, it will receive the router object.
module.exports = router;

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

//Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

//This line of code is importing a module called Model from a file located at a specific path relative to the current file.
const Model = require('../model/model');

//router.post('/post', async (req, res) => { ... }): This sets up a route handler using Express for POST requests to the '/post' endpoint. When the server receives a POST request to '/post', it triggers the function provided as the second argument, which takes req (the request object) and res (the response object) as parameters.

/*POST Method - Create Data:
This route handles HTTP POST requests to '/api/post'.
It creates a new instance of the 'Model' with the data from the request body,
then attempts to save it to the database. If successful, it responds with the saved data;
otherwise, it returns an error message.*/

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        product: req.body.product
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

/*GET Method - Get All Data:
This route handles HTTP GET requests to '
It retrieves all data from the database using Model.find()
and responds with the retrieved data. If an error occurs,
it returns a 500 internal server error.*/

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
/*PUT Method - Update Data by ID:
This route handles HTTP PUT requests to '
where ':id' is a parameter representing the document's ID.
It updates a specific document by ID using Model.findByIdAndUpdate()
 and responds with the updated data. If an error occurs, it returns a 400
 bad request error.*/

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

/*DELETE Method - Delete Data by ID:
This route handles HTTP DELETE requests to '/api/delete/:id',
where ':id' is a parameter representing the document's ID.
It deletes a specific document by ID using Model.findByIdAndDelete()
and responds with a message indicating which document has been deleted.
 If an error occurs, it returns a 400 bad request error.*/
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})