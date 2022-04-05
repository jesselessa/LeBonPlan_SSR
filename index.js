//--------- EXPRESS AND HANDLEBARS ------------//
const express = require("express");
const app = express();
const port = 8000;
const handlebars = require("express-handlebars");
//-------------- OTHER LIBRARIES --------------//
// const path = require("path");
const cookieParser = require("cookie-parser");
//------------ HANDLEBARS CONFIG --------------//
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

//---------------- MIDDLEWARES -----------------//
app.use(cookieParser());
// * For CSS and JS in HTML
app.use(express.static(path.join(__dirname, "/public")));
// * For the body of the form in login
app.use(express.urlencoded({ extended: true }));

//----------------- ROUTES -------------------//
app.get("/", async (_req, res) => {
  res.render("homepage");
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
