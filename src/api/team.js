const { Router } = require("express");
const router = Router({ mergeParams: true });
const teamController = require("../controllers/team"); 

router.get("/");
router.get("/seasons");
router.get("/leaders");
router.get("/players");
router.get("/coaches"); 
router.get("/executives");
router.get("/stats");


module.exports = router; 