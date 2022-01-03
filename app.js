const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express();

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var newItems = ["Do web dev","clean room","watch himym"]

app.get('/', function(req, res){
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }

    var day = today.toLocaleDateString("en-us",options)
    res.render("list",{kindOfDay : day , newListItems : newItems});
});

app.post("/",function(req,res){
    var Item = req.body.newItem
    newItems.push(Item)
    res.redirect("/") ;
    
})


app.listen(3000, function(){
console.log('Server started on port 3000.');
});