var express = require('express');
var router = express.Router();


var Player = require('../models/player');

// players display
router.get("/", function(req, res, next){

    Player.find({},function(err, players){
    if(err){
        console.log("hi");
      res.render('error', {
        message: "players failed",
        error: err
      });
    } else {
      res.render('players', {
        players: players,
        title: "Players"
      });
    }
  })
});




module.exports = router;
