var func = require("./getCardData")
var express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/cards', (req, res)=>{
    const body = req.body;
    res.send(func.getCards(req.body))
});

router.post('/availableCards', (req, res)=>{
    const body = req.body;
    res.send(func.getAvailableCards(req.body))
});

app.use("/", router);

var server = app.listen(3000, ()=>{
console.log("Server running at http://localhost:3000/")
});

