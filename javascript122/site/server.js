import express from "express";
import { connectionString } from "./credentials.js";
import router from "./routes/albums.js"
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
const app = express();

mongoose.set("strictQuery", false);
const mongoDB = connectionString;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}

app.set("view engine", "ejs");
//Middleware
app.use(router);
app.use(express.json())



app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
  );
});
