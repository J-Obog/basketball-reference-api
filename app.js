const express = require("express")
const app = express()
const port = process.env.PORT || 8000
//const cors = require("cors")

const nba = require("./api/nba")


app.use("/nba", nba)



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
















