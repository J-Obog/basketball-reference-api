const express = require("express")
const router = express.Router()

const teams = require("./teams")
//const players = require("./players")
//const scores = require("./scores")

router.use("/teams", teams)
//router.use("/players", players)
//router.use("/scores", scores)


module.exports = router