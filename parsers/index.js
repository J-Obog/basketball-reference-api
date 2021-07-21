const cheerio = require("cheerio");
const stripHTMLComments = require("strip-html-comments");

exports.parseTable = async (content, tableId, fn) => {
    try {
        const noComment = stripHTMLComments(content); 
        const $ = cheerio.load(noComment); 
        const r = $(`table[id=${tableId}] > tbody > tr`).map((_, row) => fn($(row).children()));   
        return r.toArray(); 
    } catch(e) { 
        console.log(e);
    }
}