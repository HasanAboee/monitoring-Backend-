const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    city:{type:String,required:true},
    enable:{type:Number, required:true},
    disable:{type:Number, required:true},
})

module.exports = mongoose.model('service', serviceSchema)