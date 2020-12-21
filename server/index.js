require('dotenv').config();
const express = require('express'),massive = require('massive'), session = require('express-session'),{SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env;

const app = express()
app.use(express.json())
app.use(
    session({
        resave:false,
        saveUninitialized:true,
        rejectUnauthorized:false,cokkie:{maxAge:1000*60*60},
        secret:SESSION_SECRET
    })
)
massive({
    connectionString:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db',db)
    app.listen(port || 3553, () => console.log(`Connected to ${port}`))
})