var db = require('../../config/dbconfig.js');



module.exports = {

  // Get all the data to show on the home page.
  getAllData: function (callback) {

      var query = 'SELECT * FROM artwork';

      db.query(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  },

  // Get a single artist's data.
  getArtistData: function (artistId, callback) {

      var query = 'SELECT * FROM artwork WHERE artistId = ' + artistId;

      db.query(query, function (err,result){
          if(err) throw err;
          callback(result);
      });
  }

};
