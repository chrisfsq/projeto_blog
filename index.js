const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const connection = require('./database/connection')

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index')
})

connection
.authenticate()
.then(() => {  
    console.log('Database connected sucessfuly!')
})
.catch(() => {
    console.log('Failed connect to database.')
});








app.listen(port, () => {
    console.log("Server running on port " + port)
});