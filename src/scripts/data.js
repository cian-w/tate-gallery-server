var sqlite3     = require('sqlite3').verbose();
var db          = new sqlite3.Database('./Lab_Database/data/database.db');


module.exports = {

  // Get all the data to show on the home page.
  getAllData: function (callback) {
      var query = 'SELECT * FROM artwork WHERE id > 1000 LIMIT 100';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get array of artists names
  getArtistsNames: function (callback) {
      var query = 'SELECT name, id FROM artists;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get a single artist's data.
  getArtistData: function (artistId, callback) {
      var query = 'SELECT * FROM artwork WHERE artistId = ' + artistId + ';';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Search table for a given string
  searchData: function (searchTerm, callback) {
      var query = 'SELECT * FROM artwork WHERE title LIKE "' + searchTerm + '%" LIMIT 100;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get artwork by price starting with the cheapest
  filterByPriceLow: function (callback) {

      var query = 'SELECT * FROM artwork ORDER BY price ASC LIMIT 100;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get artwork by price starting with the most expensive
  filterByPriceHigh: function (callback) {
      var query = 'SELECT * FROM artwork ORDER BY price DESC LIMIT 100;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Upload new artwork to DB
  uploadArtwork: function (artwork){
      artwork = JSON.parse(Object.keys(artwork)[0]);

      var title = artwork.title;
      var artist = artwork.artist;
      var url = artwork.url;
      var id = Math.random();

      var query = "INSERT INTO artwork(id,accession_number,artist,artistRole,artistId,title,dateText,medium,creditLine,year,acquisitionYear,dimensions,width,height,depth,units,inscription,thumbnailCopyright,thumbnailUrl,url) VALUES ('" + id + "','A0240001','" + artist + "','artist','385453','" + title + "','date','empty','2017',NULL,'2017','support: 394 x 419 mm','394','419',NULL,'mm',NULL,NULL,'" + url + "','" + url + "');";

      db.run(query, function(err){
          if(err) {
              console.log(err);
          }
      });
  },

  // Upload new artwork to DB
  insertOrder: function (price){
      var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      price = JSON.parse(Object.keys(price)[0]);
      var query = "INSERT INTO orders(price,date) VALUES ('"+price+"','"+date+"' );";

      db.run(query, function(err){
          if(err) {
              console.log(err);
          }
      });
  },

  // Get orders to show on account page
  getOrders: function (callback) {
      var query = 'SELECT * FROM orders;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

};
