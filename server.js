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


app.use(session({
    secret: sessionKey,
    resave: true,
    saveUninitialized: true
}
));

let sess;

let blbl = (str) => {
    if (str == null) return '';
    return String(str).
        replace(/&/g, '&amp;').
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;').
        replace(/"/g, '&quot;').
        replace(/--/g, '&#151;').
        replace(/'/g, '&#039;');
}

var pad = function (num) { return ('00' + num).slice(-2) };
var date;
date = new Date();
date = date.getFullYear() + '-' +
    pad(date.getMonth() + 1) + '-' +
    pad(date.getDate()) + ' ' +
    pad(date.getHours()) + ':' +
    pad(date.getMinutes()) + ':' +
    pad(date.getSeconds());

app.post('/register', (req, res) => {
    let username = blbl(req.body.username);
    let pass = blbl(req.body.password);
    sess = req.session;
    connection.query(`INSERT INTO Users (username,pass,created_at) VALUES ('${username}','${pass}','${date}')`, (error, results, fields) => {
        if (error) console.log(error);
        else {
            console.log('Compte crée avec succès')
            sess.username = username;
            res.status(200);
        }
    });
});

app.post('/login', (req, res) => {
    sess = req.session;
    console.log(req.body)
    let username = blbl(req.body.username);
    let pass = blbl(req.body.password);
    connection.query(`SELECT pass from Users WHERE username = '${username}'`, (error, results, field) => {
        if (error) {
            console.log(error);
        } else {
            if (pass == results[0].pass) {
                sess.username = username;
                res.status(200);
                res.json('Connected')
            }else{
                res.status(503);
            }
        }
    })
});

app.get('/logout', (req, res) => {
    // destroy la session id concernée
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200);
        }
    });
});

app.get('/isConnect', (req,res)=>{
    sess=req.session;
    return sess.username.length>0;
})

app.listen('8080', () => {
    console.log('server listening on port 8080')
})