var express     = require('express');
var app         = express();
var data        = require('./src/scripts/data');
var http        = require('http');
var request     = require('request');


app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    data.getAllData(function (result) {
        res.send(result);
    });
});

app.get('/artist/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artistId = req.params.id;
    console.log(artistId);
    data.getArtistData(artistId, function (result) {
        res.send(result);
    });
});


app.listen(3000, function () {
  console.log('Tate Gallery server is running on port 3000!');
});
