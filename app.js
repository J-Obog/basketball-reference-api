require('dotenv').config(); 
const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 8000; 


app.use(express.urlencoded({extended: false}));
app.use(express.json()); 


app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀🚀🚀`); 
})
















