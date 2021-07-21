const { Router } = require("express"); 
const router = Router();
//routers
const teams_router = require("./teams");

//routing middleware
router.use("/teams", teams_router);  

module.exports = router;