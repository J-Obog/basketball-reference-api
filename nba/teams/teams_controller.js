const cheerio = require("cheerio") 
const axios = require("axios")


async function parseFrachises(data, activity) {
	try { 
		const $ = await cheerio.load(data)
		const index = (activity == "true" || activity == null) ? 0 : 1
		
		let arr = [] 
		$($("tbody").get(index)).find("tr").each((index,element) => {
			let obj = {}
			$(element).children().each((idx,el) => {
				const k = $(el).attr("data-stat")
				const v = $(el).text()
				obj[k] = v
			})
			arr.push(obj)
		})
		return arr
	
	} catch(err) {
		console.error(err)
	} 
}


module.exports.getTeamIndex = async (req, res) => {
	try {
		const { active } = req.query
		const { data } = await axios.get("https://aws.basketball-reference.com/teams/")
		parseFrachises(data, active)
		.then(datum => {
			res.json({
				teams: datum
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
