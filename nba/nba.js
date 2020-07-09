//Express middleware
const express = require("express")
const router = express.Router() 

//Sub Routes
const teams = require("./teams/teams.js") 


router.use("/teams", teams)



module.exports = router