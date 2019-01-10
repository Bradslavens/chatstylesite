const express = require("express")
const app = express()

app.use(express.static(__dirname))

port = process.env.PORT

var questions = [
    {
        answer:"I want to buy something", 
        response:"<h4 class='question>What would you like to buy?</h4>" 
    },
    {
        answer:"Hat",
        response:"<h4>Great! How many would you like?</h4><input type='text'><button>Submit</button>"
    }
    ];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/answer/:answer", (req,res)=>{
    var item = questions.find(item => item.answer === req.params.answer);
    res.send(item);
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})