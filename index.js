var express = require('express');
var app = express();

const subscribeToRoutes = require ('./routing/index.js')
app.use(express.static('static'));

subscribeToRoutes(app);

var server = app.listen(3000, function () {
    console.log("On: 3000");
});