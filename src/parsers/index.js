const cheerio = require("cheerio")

module.exports.tableParser = async (data, tableMode, omit = []) => {
	try {
		const $ = cheerio.load(data)
		return $(`${tableMode} > tr`).map((index, row) => {
			let obj = {} 
			$(row).children().each((idx, field) => {
				const key = $(field).attr("data-stat")
				if(!omit.includes(key)) {
					const value = $(field).text()
					obj[key] = value
				}
			})
			return obj
		})
	} catch(err) {
		console.error(err)
	}
}

