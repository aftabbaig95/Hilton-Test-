require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');

const port = process.env.SERVER_PORT || 3001;
let { SERVER_PORT, SESSION_SECRET } = process.env;


const app = express();
app.use(json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000
    }
  })
);





app.listen(port, () => console.log( `Listening for requests on port ${port}` ));