//configurations
require("module-alias/register"); 
require("dotenv").config(); 

const express = require("express"); 
const app = express(); 
const routes = require("./api");  
const port = process.env.PORT || 8000; 

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use("/api/v1", routes); 

app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀🚀🚀`); 
})
















