const axios = require("axios"); 
const cheerio = require("cheerio"); 
const stripHTMLCommments = require("strip-html-comments");

exports.parseTable = async (url, tablePath, fn) => {
    try {
        const page = await axios.get(url); 
        const noComments = stripHTMLCommments(page.data);
        const $ = cheerio.load(noComments);  
        const result = $(tablePath).map((_, row) => fn($(row).children()));
        return result.toArray();  
    } catch(e) {
        console.error(e);
    }
}