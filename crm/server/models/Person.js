const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    "name": String,
    "email": String,
    "firstContact": String,
    "emailType": String,
    "sold": Boolean,
    "owner": String,
    "country": String
})

const Person = mongoose.model("Person" , personSchema)
module.exports = Person