const teamsSchemas = require("../schemas/teams"); 
const parser = require("../utils/parser");

exports.getAllFranchises = async (req, res) => {
    try {
        const { status } = req.query; 
        const franchises = await parser.parseTable("https://www.basketball-reference.com/teams/", 
                                                    "table[id='teams_active'] > tbody > tr[class='full_table']",
                                                    teamsSchemas.franchiseTbl);
        res.status(200).json({
            teams: franchises
        })
    } catch(e) {
        res.status(500).json({
            error: e.toString()
        })
    } 
}