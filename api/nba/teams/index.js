const express = require("express")
const router = express.Router()

const controller = require("./teams_controller.js")


router.get("", (req, res) => {
	controller.getFranchises(req, res)
})






module.exports = router