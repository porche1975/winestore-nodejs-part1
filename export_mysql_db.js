/**
 *
 * This script creates the mongo db and inserts the winestore data
 **/

var fs = require('fs');
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cellar',
    password: 'poop',
    database: 'cellar'
});


connection.connect(function(err) {
    if (err) {
        console.log(' could not connect! ' + err );
        process.exit();
    }
    else {
        console.log('connected!')
    }
});

connection.query('select * from wine', function(err, rows) {
    if (err) throw err

    var data = [];
    for (var i = 0; i < rows.length; i++) {
        data.push(rows[i]);
    }

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved to file");
        }
    })
})

connection.end()
