const express = require("express")
const router = express.Router() 
const { table_parser } = require("../../controller.js")
const cheerio = require("cheerio")
const axios = require("axios")



router.get("", async (req, res) => {
	const { data } = await axios.get("https://www.basketball-reference.com/teams/ATL/2002.html#all_per_game")
	const $ = await cheerio.load(data)
	console.log($.html())
	//console.log($("table").length)
	const tbl = await table_parser($("tbody").get(0))

	res.json({
		datum: tbl.toArray() 
	})

})


module.exports = router