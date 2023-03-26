const express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
// middleware
app.use(bodyParser.json())
app.use(cors({
    origin: '*',
}))
app.listen(4000, () => {
  console.log(`App is Running at PORT 4000`);
});

app.get("/shreya", (req, res) => {
  console.log(req.url);
  return res.send(`<h1>Welcome to / Route </h1>`);
});

app.post("/getformdata", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  return res.status(200).json({
    name,
    email,
    message:"Congrats you are Logged In"
  });
});
