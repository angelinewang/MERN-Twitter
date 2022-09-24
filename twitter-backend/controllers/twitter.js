const Tweet = require('../models/Tweet')

// async
function getAllTweets(req,res) {

    // Tweet.find({name: 'Angeline'}).then((tweets) =>)
    Tweet.find({}).then((tweets) => {
        res.json(tweets)
    }).catch(err => err)

    // let tweets = await Tweet.find({})
    // res.json(tweets)
}

function deleteTweet(req,res) {
    let tweetId = req.params.id
    //Retrieving the ID from the route
    Tweet.findByIdAndDelete(tweetId)
    .then(() => res.json({"message": "Tweet was successfully deleted."}))
    .catch(err => res.json(err))
}

function tweetDetail(req,res) {
    let tweetId = req.params.id
    Tweet.findById(tweetId)
    .then((tweet) => res.json(tweet))
    .catch(err => err)
}

function createTweet(req,res) {
    console.log(req.body)
    let newTweet = req.body
    // let newTweet = await Tweet.create(newTweet) async
    Tweet.create(newTweet)
    .then(tweet => res.json(tweet))
    .catch(err => res.json(err))
}

function updateTweet(req,res) {
    let updatedTweet = req.body
    let tweetId = req.params.id
    Tweet.findByIdAndUpdate(tweetId, updatedTweet)
    .then((tweet) => res.json(tweet))
    .catch(err => err)
}

//Tweet.findAll({}) --> Empty object = All the data
//.then responds with all the tweets 

module.exports = {
    getAllTweets,
    deleteTweet,
    tweetDetail,
    createTweet,
    updateTweet
}