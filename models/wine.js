var mongoose = require('mongoose')


var Schema = mongoose.Schema;
var WineSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    grapes: String,
    country: String,
    region: String,
    year: String,
    picture: String,
    description: String
});
var Wine = mongoose.model('Wine', WineSchema);

module.exports = Wine;