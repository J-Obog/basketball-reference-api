const cheerio = require("cheerio")


module.exports.table_parser = async (data) => {
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