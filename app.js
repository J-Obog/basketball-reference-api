const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")

const nba = require("./nba/nba.js");

app.use("/nba", nba)


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
















