const { Router } = require("express");
const router = Router(); 
const team_router = require("./team"); 

//routing for specific teams
router.use("/:abbrev", team_router); 

//get list of NBA/ABA/BAA franchises
router.get("/", (req, res) => {
    res.sendStatus(200); 
})

module.exports = router; 