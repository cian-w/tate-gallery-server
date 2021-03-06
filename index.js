var express     = require('express');
var app         = express();
var data        = require('./src/scripts/data');
var http        = require('http');
var request     = require('request');
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    data.getAllData(function (result) {
        res.send(result);
    });
});

app.get('/artists', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    data.getArtistsNames(function (result) {
        res.send(result);
    });
});

app.get('/artist/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artistId = req.params.id;

    data.getArtistData(artistId, function (result) {
        res.send(result);
    });
});

app.get('/search/:searchTerm', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var searchTerm = req.params.searchTerm;

    data.searchData(searchTerm, function (result) {
        res.send(result);
    });
});

app.get('/filterArtist/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artistId = req.params.id;

    data.getArtistData(artistId, function (result) {
        res.send(result);
    });
});

app.get('/filterPrice/low', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artistId = req.params.id;

    data.filterByPriceLow(function (result) {
        res.send(result);
    });
});

app.get('/filterPrice/high', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artistId = req.params.id;

    data.filterByPriceHigh(function (result) {
        res.send(result);
    });
});

app.get('/orders', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    data.getOrders(function (result) {
        res.send(result);
    });
});

app.post('/checkout', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var price = req.body;
    data.insertOrder(price);
});

app.post('/upload', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    var artwork = req.body;
    data.uploadArtwork(artwork);
});


app.listen(8081, function () {
  console.log('Tate Gallery server is running on port 3000!');
});
