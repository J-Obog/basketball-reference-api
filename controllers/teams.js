const axios = require("axios"); 
const { parseTable } = require("@parser");
const { parseFranchiseTable } = require("@parser/teams"); 

exports.getAllFranchises = async (req, res) => {
    try {
        const franchisePage = await axios.get("https://www.basketball-reference.com/teams/");
        const franchiseTableData = await parseTable(franchisePage.data, "teams_active", parseFranchiseTable); 
        res.json({ teams: franchiseTableData }); 
    } catch(err) { 
        res.status(500).json({
            error: err.toString()
        }); 
    }
}