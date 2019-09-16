var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
 res.render("index");
});

app.get("/services", function(req, res){
    res.render("services");
});

app.get("/inspection", function(req, res){
    res.render("inspection");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.post("/contact", function(req, res){
     var contactInfo = req.body.contact;
        res.send(contactInfo);
});


app.listen(process.env.PORT || 5000);


