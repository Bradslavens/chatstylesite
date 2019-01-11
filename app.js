const express = require("express")
const app = express()

app.use(express.static(__dirname))

port = process.env.PORT

var orderNumber = "1";

var orders = {}

var questions = [
    {
        answer: "I want to return something",
        response: "<h4 class='question'>Great. What would you like to <strong>return</strong>?</h4>",
        responseInput: "<button name='Hat' class='answer pointer'>Hat</button><button class='answer pointer'>Shoes</button>"
    },
    {
        answer:"I want to buy something", 
        response:"<h4 class='question'>Great. What would you like to <strong>buy</strong>?</h4>",
        responseInput: "<button name='Hat' class='answer pointer'>Hat</button><button class='answer pointer'>Shoes</button>"
    },
    {
        answer:"Hat",
        response:"<h4>Great! How many would you like?</h4>",
        responseInput: "<input type='text'><button>Submit</button>"
    },
    {
        answer: "complete",
        response:"<h4>Awesome! Thanks for you order!</h4>",
        responseInput: ""
    }
    ];

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/answer/:answer", (req,res)=>{
    // start order
    if(req.params.answer === "I want to buy something") 
    {
        // start buy order
        let order = {
            customerName: "",
            type: "buy",
            item: "",
            quantity: 0
        }
        orders[orderNumber] = order
        orderNumber++
    }
    else if (req.params.answer === "I want to return something")
    {
        // start return order
        let order = {
            customerName: "",
            type: "return",
            item: "",
            quantity: 0
        }
        orders[orderNumber] = order
        orderNumber++
    }
    var item = questions.find(item => item.answer === req.params.answer)
    res.send(item)
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})
//
//