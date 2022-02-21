var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onDefault=function(req, res){
    res.send("<h1>Welcome to Fabrikam</h1>");
};
 
var onAboutUs=function(req, res){
    res.send("<h1>Fabrikam Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Multinational Company</li>"+
                    " <li>24 offices all over the world</li>"+
                    " <li>Our Products :</li>"+
                    " <li>Our Services :</li></li>"+
             "</ol>");
};
var onHR=function(req, res){
    res.send("<h1>Welcome to Fabrikam</h1>"+
    "<h1>This is HR Section</h1>");
};
var onAccount=function(req, res){
    res.send("<h1>Welcome to Fabrikam</h1>"+
    "<h1>This is Account Section</h1>");
};
var onProjectManagement=function(req, res){
    res.send("<h1>Welcome to Fabrikam</h1>"+
    "<h1>This is Project Management Section</h1>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);
app.get("/hr",onHR);  
app.get("/account",onAccount);
app.get("/projectmanagement",onProjectManagement);
var server=app.listen(8081);
console.log("Server is running on port 8081");
