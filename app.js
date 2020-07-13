const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")
const cheerio = require("cheerio")
const axios = require("axios")
const { table_parser } = require("./controller.js")

//const nba = require("./nba");

//app.use("/nba", nba)

app.use(cors())

app.get("", async (req, res) => {
	try {
		const { data } = await axios.get("https://widgets.sports-reference.com/wg.fcgi?css=1&site=bbr&url=%2Fplayers%2Fj%2Fjamesle01.html&div=div_per_game")
		const $ = await cheerio.load(data)
		const tbl = await table_parser($("tbody").get(0))
		
		res.json({
			data: tbl.toArray()
		})
	} catch(err) {
		console.error(err)
		res.sendStatus(500)	
	}
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
















