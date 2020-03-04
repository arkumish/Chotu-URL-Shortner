const mongoose = require('mongoose');
const shortid = require('shortid')

const Schema = mongoose.Schema;

let URLDetailSchema = new Schema({
    FullURL : {type:String,required:true},
    ShortURL : {type:String,default:shortid.generate(),required:true},
    Click : {type:Number,default:0},
    DateOfCreation : {type:Date, default:Date.now}
});

module.exports = mongoose.model('URLschema',URLDetailSchema);
