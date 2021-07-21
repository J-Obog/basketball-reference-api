const { Router } = require("express");
const router = Router(); 
const teamRoutes = require("./team");
const teamsController = require("@controllers/teams");

//routing for specific teams
router.use("/:abbrev", teamRoutes); 

//get list of NBA/ABA/BAA franchises
router.get("/", teamsController.getAllFranchises); 

module.exports = router; 