const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let URLDetailSchema = new Schema({
    FullURL: { type: String, required: true },
    ShortURL: { type: String, required: true },
    Click: { type: Number, default: 0 },
    DateOfCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('URLschema', URLDetailSchema);
