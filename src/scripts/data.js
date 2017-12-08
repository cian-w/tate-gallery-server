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

  searchData: function (searchTerm, callback) {
      var query = 'SELECT * FROM artwork WHERE title LIKE "' + searchTerm + '%" LIMIT 100;';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  }

};
