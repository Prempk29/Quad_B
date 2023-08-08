import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ejs from 'ejs'
import fetch from 'node-fetch';


const app = express();
const apiUrl="https://api.wazirx.com/api/v2/tickers"

//middlewares
// mongoose.connect(
//   "mongodb+srv://prempk7172:prem@cluster0.dkzlbmo.mongodb.net/codechat"
// );
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here
    const da=data['multiusdt']
    // const result2 = Array(data).slice(0,2)
    // console.log(result2)
    console.log(da)

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
app.get("/",(req,res)=>
{
    res.render("home");
})

app.listen(2000,()=>
{
    console.log("server is running on port 3000");
})