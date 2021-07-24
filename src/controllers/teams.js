const teamsSchemas = require("../schemas/teams"); 
const parser = require("../utils/parser");
const { TEAMS_URL, TEAMS_ACTIVE_TBL, TEAMS_DEFUNCT_TBL } = require("../utils/constants");

exports.getAllFranchises = async (req, res) => {
    try {
        const { status } = req.query; 
        //choose between active and defunct team based on params
        const franchises = await parser.parseTable(TEAMS_URL, TEAMS_ACTIVE_TBL, teamsSchemas.franchiseTbl);
        res.status(200).json({
            teams: franchises
        })
    } catch(e) {
        res.status(500).json({
            error: e.toString()
        })
    } 
}