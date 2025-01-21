import express from "express";
import { getAll } from "./data.js";
import { getItem } from "./data.js";
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//render home page
app.get("/", (req, res) => {
  let albums = getAll();
  res.render("index", {albums} );
});

//render details page
// app.get("/details", (req, res) => {
//   res.render("pages/details");
// });

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  );
});
