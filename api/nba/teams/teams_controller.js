const axios = require("axios")
const cheerio = require("cheerio")

const baseUri = "https://widgets.sports-reference.com/wg.fcgi?css=1&site=bbr&url=%2Fteams%2F&div=div_teams_"


async function table_body_parser(data) {
	try { 
		const $ = await cheerio.load(data)
		return $("tbody > tr").map((index, row) => {
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


module.exports.getFranchises = async (req, res) => {
	try {
		const { franchise_type } = req.query
		const url = (franchise_type) ? `${baseUri}${franchise_type}` : `${baseUri}active`
		const { data } = await axios.get(url)
		const result = await parseTable(data)
		res.json({
			teams: result.toArray()
		})
	} catch(err) {
		console.error(err)
		res.sendStatus(500)
	}
}


