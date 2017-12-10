var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
const fs = require('fs')

db.serialize(function() {
    db.run("CREATE TABLE orders(" +
                ",price VARCHAR(50)" +
                ",date   VARCHAR(84)" +
                ")"
    );
});

db.close();
