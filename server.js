const express = require('express'),
    app = express(),
    session = require('express-session'),
    mysql = require('mysql2'),
    secure = require('./secure.js'),
    connect = secure.connection,
    sessionKey = secure.sessionKey,
    connection = mysql.createConnection(connection);

app.post('/register',()=>{

});

app.post('/login',()=>{

});

app.get('/logout',()=>{
    // destroy la session id concernée
});

app.listen('8080', () => {
    console.log('server listening on port 8080')
})