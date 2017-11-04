var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var connection = require('./config/connection.js');

var app = express();
