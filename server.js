const express = require('express'),
    app = express(),
    session = require('express-session'),
    mysql = require('mysql2'),
    secure = require('./secure.js'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    connect = secure.connection,
    sessionKey = secure.sessionKey,
    connection = mysql.createConnection(connect);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    console.log(req.body);
});

app.post('/login', (req, res) => {

});

app.get('/logout', (req, res) => {
    // destroy la session id concernée
});

app.listen('8080', () => {
    console.log('server listening on port 8080')
})