const express = require("express")
const router = express.Router()
const axios = require("axios")
const parser = require("@parsers")


router.use("/:franchise", require("./franchise"))


router.get("", async (req, res) => {
	try {
		const franType = req.query.franchise_type || "active"
		const { data } = await axios.get(`https://widgets.sports-reference.com/wg.fcgi?css=1&site=bbr&url=%2Fteams%2F&div=div_teams_${franType}`)
		const result = await parser.tabeParser(data, "tbody")
		res.json({
			data: result.toArray()
		})
	} catch(err) {
		res.sendStatus(500)
	}
})




module.exports = router