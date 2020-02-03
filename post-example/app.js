const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const myMiddleWare = (req, res, next) => {
  console.log("myMiddleWare was called");
  console.log(req.url);
  next();
  // // req.foo = "bar";
  // setTimeout(() => {
  //   next();
  // }, 5000);
};

app.get("/", myMiddleWare, (req, res) => {
  res.render("index.hbs");
});

// app.use(myMiddleWare);

app.get("/signup", (req, res) => {
  console.log("GET /signup");
  res.render("index.hbs");
});

app.post("/signup", (req, res) => {
  console.log("POST");
  console.log("req.body :", req.body);
});

app.listen(3000);
