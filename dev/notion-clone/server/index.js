const express = require("express")
const app = express()
const PORT = 5000

app.get("/", (req, res ) => {
    res.send("Hello") 
})


app.listen(PORT, () => {
    console.log("サーバーが起動しました")
})