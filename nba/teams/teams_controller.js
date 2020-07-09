const cheerio = require("cheerio") 
const axios = require("axios")


function parseFrachises(data, activity) {
	const $ = cheerio.load(data)
	const index = (activity == "true" || activity == null) ? 0 : 1
	let arr = [] 
	$("tbody")[index].each((index,element) => {
		let obj = {}
		
		arr.push(obj) 
	})
	console.log(arr)
}


module.exports.getTeamIndex = async (req, res) => {
	const { active } = req.query
	const { data } = await axios.get("https://aws.basketball-reference.com/teams/")
	parseFrachises(data, active)
	//getFranchise(index)

	res.json({message: 'All good!'})
} 