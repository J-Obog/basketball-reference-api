const { Router } = require("express");
const router = Router();
const teamsController = require("../controllers/teams"); 

router.get("/", teamsController.getAllFranchises);


module.exports = router; 