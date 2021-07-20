require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const api_router = require("./api");  
const port = process.env.PORT || 8000; 

app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use("/api/v1", api_router); 

app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀🚀🚀`); 
})
















