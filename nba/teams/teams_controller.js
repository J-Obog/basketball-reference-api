const cheerio = require("cheerio") 
const axios = require("axios")


async function tableParser(data, activity) {
	try { 
		const $ = await cheerio.load(data)
		const index = (activity == "true" || activity == null) ? 0 : 1
		
		return $($("tbody").get(index)).find("tr").map((index,element) => {
			let obj = {}

			$(element).children().each((idx,el) => {
				const k = $(el).attr("data-stat")
				const v = $(el).text()
				obj[k] = v
			})
			
			return obj
		})
	} catch(err) {
		console.error(err)
	} 
}


module.exports.getTeamIndex = async (req, res) => {
	try {
		const { active } = req.query
		const { data } = await axios.get("https://aws.basketball-reference.com/teams/")
		tableParser(data, active)
		.then(datum => {
			res.json({
				teams: datum.toArray()
			})
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(500)
		})
	} catch(err) {
		console.error(err)
		res.sendStatus(500)
	}
} 
