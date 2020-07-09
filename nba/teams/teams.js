const express = require("express")
const router = express.Router() 

const teams_ctrl = require("./teams_controller.js")


router.get("", (req, res) => {
	teams_ctrl.getTeamIndex(req,res)
})


module.exports = router