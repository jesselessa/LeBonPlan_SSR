//--------- EXPRESS AND MANGOOSE ------------//
const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
//---------- AUTHENTIFICATION ----------------//
const cookieParser = require("cookie-parser");
const { MONGODB_URI } = process.env;

//-------------- OTHER LIBRARIES --------------//
const handlebars = require("express-handlebars");
const path = require("path");
//------------ HANDLEBARS CONFIG --------------//
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//---------------- MIDDLEWARES -----------------//
app.use(express.json());
app.use(cookieParser());
// * For CSS and JS in HTML
app.use(express.static(path.join(__dirname, "/public")));
// * For the body of the form in login
app.use(express.urlencoded({ extended: true }));

//----------------- ROUTES -------------------//

// * HOMEPAGE
app.get("/", async (_req, res) => {
  res.render("homepage");
});

// * SIGNUP
app.get("/signup", async (_req, res) => {
  res.render("signup");
});

// ! Create a user
app.post("/signup", (req, res) => {
  console.log(req.body);
  // ! Create a token
  const token = "eyJabcdteslojm";
  res.cookie("jwt", token);
  res.redirect("/profile");
});

// * LOGIN
app.get("/login", async (_req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // ! Create a user
  console.log(req.body);
  // ! Create a token
  const token = "eyJabcdteslojm";
  res.cookie("jwt", token);
  res.redirect("/products");
});

app.get("/profile", async (_req, res) => {
  res.render("profile");
});

app.get("/users", async (_req, res) => {
  res.render("users");
});

app.get("/products", async (_req, res) => {
  res.render("products");
});

//-------------- START SERVER ----------------//
app.listen(port, () => {
  console.log(`Server listening at : http://localhost${port}`);
});
