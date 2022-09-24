var express = require('express');
var router = express.Router();

const TweetCtrl = require('../controllers/twitter')

/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/tweets')
});

//Get ALL Route
router.get('/tweets', TweetCtrl.getAllTweets)

//Delete Tweet Route
router.delete('/tweets/:id', TweetCtrl.deleteTweet)

router.get('/tweets/:id', TweetCtrl.tweetDetail)

router.post('/tweets', TweetCtrl.createTweet)

router.patch('/tweets/:id', TweetCtrl.updateTweet)

module.exports = router;
