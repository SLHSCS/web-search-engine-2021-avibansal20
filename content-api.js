const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    app.post('/book', (req, res) => {
        const book = req.body;
        console.log(book);
        books.push(book);
    
        res.send('Book is added to the database');
    });
});

app.listen(port, () => console.log('Hello world app listening on port ${port}!'));

const setEditModal = (isbn) => {
    // We will implement this later
}

const deleteBook = (isbn) => {
    // We will implement this later
}

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/books", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();