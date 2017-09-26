//Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

const booksController = require('./controllers/books.js');
app.use('/books', booksController)

const seedController = require ('./controllers/seed_data.js');
app.use('/seed', seedController);


//Connections
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/book_app';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=> {
  console.log('connect to mongo')
})




app.listen(port, () => {
  console.log('I have started listening for requests')
})
