// jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// first page with bmi calculation
app.get('/', function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

var weight = Number(req.body.number3);
var height = Number(req.body.number4);

function bmiCalculator (weight, height) {
    var interpretation = (weight / Math.pow(height, 2)) * 10000;

    if (interpretation < 18.5) {
        return res.send('<h1>"Your BMI is "</h1>' + interpretation + '<h2>", so you are underweight."</h2>');
    } else if (interpretation >= 18.5 && interpretation <= 24.9){
        return res.send('<h1>"Your BMI is "</h1>' + interpretation + '<h2>", so you have a normal weight."</h2>');
    } else if(interpretation > 24.9) {
        return res.send('<h1>Your BMI is </h1>' + interpretation + '<h1>, so you are overweight.</h1>');
    }
    return interpretation;
}
 bmiCalculator(weight,height);
});
// second page with addition of number

app.get('/add', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", function(req, res){
  var numb1 = Number(req.body.number1);
  var numb2 = Number(req.body.number2);
  var result = numb1 + numb2;
  res.send("<h2>The result of calculation is </h2>" + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000. But we have multiple options also, such as 5000, 4040, 8080, etc");
});
