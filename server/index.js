var func = require("./getData")
var express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



router.get('/cards', (req, res)=>{
    const body = req.body;
    console.log("Inside body")
    res.send(func.getCards(req.body))
});

router.get('/cardDetails', (req, res)=>{
    const body = req.body;
    console.log("Inside card Details")
    res.send(func.getCardDetails(req.body))
})

app.use("/", router);

var server = app.listen(3000, ()=>{
console.log("Server running at http://localhost:3000/")
});

