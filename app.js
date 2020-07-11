const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")

const nba = require("./nba");

app.use("/nba", nba)



app.use(cors())



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
















