const express = require("express");
const { engine } = require("express-handlebars"); // Destructure the engine function
const app = express();

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
  })
); //located in views/layouts
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

// configure Handlebars view engine

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);
