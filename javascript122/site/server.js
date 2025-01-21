import express from "express";
import { getAll } from "./data.js";
import { getItem } from "./data.js";
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//render home page
app.get("/", (req, res) => {
  // let albums = getAll();
  res.render("index", {albums: getAll()} );
});

//render details page
app.get("/details/:id", (req, res) => {
  const albumId = parseInt(req.params.id); // Convert ID from URL to a number
  const album = getItem(albumId); // Fetch album using getItem function

  if (album) {
    res.render("details", { album }); // Pass album to details.ejs
  } else {
    res.status(404).send("Album not found"); // Handle case where album is not found
  }
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  );
});
