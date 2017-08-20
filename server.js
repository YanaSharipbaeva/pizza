const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var booksUrl = path.join('books.json');

app.get('/pizza.json', function (req, res) {
    fs.readFile('pizza.json', 'utf8', function (err, data) {
        if (data) {
            var obj = JSON.parse(data);
            res.send(obj);
        } else {
            res.sendStatus(500);
        }

        if (err) throw err;
    });
});

app.listen(3000);
