const cheerio = require("cheerio")
const axios = require("axios")


async function table_parser(data) {
	try { 
		const $ = await cheerio.load(data)
		return $("tr").map((index, row) => {
			let obj = {}
			$(row).children().each((idx, field) => {
				const k = $(field).attr('data-stat')
				const v = $(field).text()
				obj[k] = v 
			})
			return obj
		})
	} catch(err) {
		console.error(err)
	} 
}

module.exports.getData = async (req, res) => {
	try {
		const { type } = req.query
		const { data } = await axios.get("https://www.basketball-reference.com/teams/")
		const $ = await cheerio.load(data)

		const act = await table_parser($("tbody").get(0))
		const def = await table_parser($("tbody").get(1))
		/*
		if(type == "active") {
			res.json({
				active: act.toArray()
			})
		} else if(type == "defunct") {
			res.json({
				defunct: def.toArray()
			})
		} {
			res.json({
				active: act.toArray(),
				defunct: def.toArray()
			})
		}*/
	} catch(err) {
		console.error(err)
		res.sendStatus(500)
	}
}





