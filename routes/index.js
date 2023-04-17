const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");
const db = require("../db/index.js");

/* GET home page */
router.get("/", (req, res) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find().then((mdb) => {
    console.log(mdb);
    res.render("movies", { mo: mdb });
  });
});

router.get("/movies/:id", (req, res) =>{
    Movie.findById(req.params.id)
    .then((mov) => {
        res.render('movieD', {mov})
    })
})

module.exports = router;
