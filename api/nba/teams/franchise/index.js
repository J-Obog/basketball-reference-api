const express = require("express")
const router = express.Router({mergeParams: true})
const axios = require("axios")
const parser = require("@parsers")

const baseUrl = "https://widgets.sports-reference.com"

router.get("/seasons", async (req, res) => {
	try {
		const { franchise } = req.params 
		const { data } = await axios.get(`${baseUrl}/wg.fcgi?css=1&site=bbr&url=%2Fteams%2F${franchise}%2F&div=div_${franchise}`)
		const result = await parser.tableParser(data, "tbody", ["DUMMY"])
		res.json({ data: result.toArray() })
	} catch(err) {
		console.error(err)
		res.sendStatus(500)
	}
}) 



module.exports = router