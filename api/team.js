const { Router } = require("express");
const router = Router({ mergeParams: true }); 
//get team overview
router.get("/", (req, res) => {
    res.sendStatus(200); 
})

//get team seasons
router.get("/seasons", (req, res) => {
    res.sendStatus(200); 
})

//get team statisical leaders
router.get("/leaders", (req, res) => {
    res.sendStatus(200); 
})

//get people who played for team
router.get("/players", (req, res) => {
    res.sendStatus(200); 
})

//get people who coached for team
router.get("/coaches", (req, res) => {
    res.sendStatus(200); 
})

//get people who worked in team front office
router.get("/executives", (req, res) => {
    res.sendStatus(200); 
})

//get team stats
router.get("/stats", (req, res) => {
    res.sendStatus(200); 
})

module.exports = router; 