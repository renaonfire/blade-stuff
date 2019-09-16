var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    // flash       = require("connect-flash"),
    // session     = require("express-session"),
    mongoose    = require('mongoose');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(flash());


mongoose.connect('mongodb+srv://rena:database123@cluster0-uttko.mongodb.net/airblade?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('database connected');
// don't have to write () for err
}).catch(err => {
	console.log('Error', err.message);
});


// app.use(function(req, res){
//     res.locals.error = req.flash("error");
// 	res.locals.success = req.flash("success");
// });

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
            // req.flash("error", "Failed to Submit");
            res.redirect("/contact");
        } else {
            // req.flash("success", "Email Sent");
            res.redirect("/contact");
            
        }
    });
});


app.listen(process.env.PORT || 5000);


