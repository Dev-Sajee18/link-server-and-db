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



  require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes');
app.use('/api', routes)

