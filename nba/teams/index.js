const express = require("express")
const router = express.Router() 

const controller = require("./teams.js")


router.get("", (req, res) => {
	controller.getData(req, res)
})


module.exports = router