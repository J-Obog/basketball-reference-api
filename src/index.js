require("dotenv").config(); 

const express = require("express"); 
const app = express(); 
const cors = require("cors");
const routes = require("./api");  
const port = process.env.PORT || 8000; 

app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use("/api/v1", routes); 

app.listen(port, () => console.log(`Server running on port ${port} 🚀🚀🚀`));
















