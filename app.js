var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect('mongodb+srv://rena:database123@cluster0-uttko.mongodb.net/airblade?retryWrites=true&w=majority', {
	useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
	console.log('database connected');

}).catch(err => {
	console.log('Error', err.message);
});


var inqSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

var Inquiry = mongoose.model("Inquiry", inqSchema);


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
    Inquiry.create(req.body.contact, function(err, newInq){
        if(err){
            
            res.redirect("/contact");
        } else {
           
            res.redirect("/contact");
            
        }
    });
});


app.listen(process.env.PORT || 5000);


