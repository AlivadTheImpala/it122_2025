import express from "express";
// import { getAll } from "./data.js";
// import { getItem } from "./data.js";
import { connectionString } from "./credentials.js";
import router from "./routes/albums.js"

const app = express();

//Mongoose
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const mongoDB = connectionString;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//Router
app.use("/", router);


app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
  );
});
