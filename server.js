var express = require('express');
var app = express();
var bParse = require('body-parser');
app.use(bParse.urlencoded({extended: true}));
app.use(bParse.json());
app.use(express.static('public')); // serve static content from folder public
