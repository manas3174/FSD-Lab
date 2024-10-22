const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  publishedDate: Date,
  pages: Number,
});

const Book = mongoose.model('Book', bookSchema);

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save(); 
    res.status(201).json({ message: 'Book added successfully!', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding the book.', error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


  