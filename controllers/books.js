const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

//Index
router.get('/', (req, res)=>{
  Books.find((err, foundBooks)=>{
    res.json(foundBooks);
  });
});

//Create
router.post('/', (req, res)=>{
  console.log(req.body);
  Books.create(req.body, (err, createdBooks)=>{
    res.json(createdBooks);
  });
});

//Delete
router.delete('/:id', (req, res)=>{
  Books.findByIdAndRemove(req.params.id, (err, deletedBook)=>{
    res.json(deletedBook);
  })
})

//Update
router.put('/:id', (req, res)=>{
  Books.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBook)=>{
    res.json(updatedBook);
  });
});

module.exports = router;
