const { Router } = require("express"); 
const router = Router();

const teamsRoutes = require("./teams");

router.use("/teams", teamsRoutes);  


module.exports = router;