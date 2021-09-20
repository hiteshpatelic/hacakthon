const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");

require('dotenv').config();
const homeRouter = require('./routes/home'); 


const app = express();
app.use(express.urlencoded({ extended : true}));
const urlencodedParser = bodyParser.urlencoded({ extended :true })
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/script', express.static(__dirname + 'public/script'));
app.use(expressLayouts);
app.set('layout', './layouts/chat')
app.set('view engine', 'ejs')


app.use(express.json());
app.use('/',urlencodedParser, homeRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port 🔥 http://localhost:${port}` ));