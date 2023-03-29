const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/", (req, res, next) => {
  console.log("Always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send('<form action="/product" method="POST"> <input type="text" name="title">  <button type="submit">Submit</button> </form>');
});

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req, res, next) => {
  console.log("In the another middle ware");
  res.send("<h1> Express </h1>")
});


app.listen(3000);