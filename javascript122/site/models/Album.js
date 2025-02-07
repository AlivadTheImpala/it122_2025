// File: ./models/Album.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    albumTitle: { type: String, required: true },
    artist: { type: String, required: true },
    released: { type: String },
    genre: { type: String, required: true },
});



const Album = mongoose.model("Album", AlbumSchema)
export default Album;