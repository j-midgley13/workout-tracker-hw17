const router = require("express").Router();
var path = require("path");
const Workout = require("../models/workout.js");
const mongojs = require("mongojs");

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/stats.html"))
});



module.exports = router;