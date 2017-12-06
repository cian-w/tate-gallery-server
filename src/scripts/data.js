var sqlite3     = require('sqlite3').verbose();
var db          = new sqlite3.Database('./Lab_Database/data/database.db');


module.exports = {

  // Get all the data to show on the home page.
  getAllData: function (callback) {

      var query = 'SELECT * FROM artwork LIMIT 100';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get a single artist's data.
  getArtistData: function (artistId, callback) {

      var query = 'SELECT * FROM artists WHERE id = ' + artistId + ';';

      db.all(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  }

};
