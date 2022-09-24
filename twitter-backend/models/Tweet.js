const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TweetModel = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},

}, { 
    timestamps: true
    //Date where it was created and when it was last updated, createdAt and updatedAt
    //Take the timestamp and convert it into JS date 
})

const Tweet = mongoose.model('Tweet', TweetModel)
//Took the schema we ceated and bundled it into a model and then exported the module .exports

//Embedding and referencing data = Make a schema a part of another schema 

module.exports = Tweet;