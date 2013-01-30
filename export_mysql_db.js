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
        //console.log(rows[i])
       // rows[i].id = rows[i].id;
        data.push(rows[i]);
//        data.push({
//            _id: rows[i].id,
//            name: rows[i].name,
//            year: rows[i].year,
//            grapes: rows[i].grapes,
//            country: rows[i].country,
//            region: rows[i].region,
//            description: rows[i].description,
//            picture: rows[i].picture
//        })
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

//conn = new Mongo()
//db = conn.getDB('winestore')
//
//db.wines.insert({
//    _id: 1,
//    name: 'CHATEAU DE SAINT COSME',
//    year: '2009',
//    grapes: 'Grenache / Syrah',
//    country: 'France',
//    region: 'Southern Rhone',
//    description: 'The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.',
//    picture: 'saint_cosme.jpg'
//});
//
//db.wines.insert({
//    _id: 2,
//    name: 'LAN RIOJA CRIANZA',
//    year: '2006',
//    grapes: 'Tempranillo',
//    country: 'Spain',
//    region: 'Rioja',
//    description: 'A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.',
//    picture: 'lan_rioja.jpg'
//});