const express = require("express")
const app = express()

app.use(express.static(__dirname))

port = process.env.PORT

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/answer/:answer", (req,res)=>{
    console.log(req.params);
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})