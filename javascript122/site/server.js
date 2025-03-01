import express from "express";
import { connectionString } from "./credentials.js";
import router from "./routes/albums.js"
import mongoose from "mongoose";
import cors from 'cors';
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
app.use(express.json());
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.use(router);

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
  );
});
