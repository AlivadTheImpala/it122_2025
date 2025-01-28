// File: ./models/Album.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    albumTitle: { type: String, required: true },
    artist: { type: String, required: true },
    released: { type: String },
    genre: { type: String, required: true },
});

// Virtual for albums's URL
AlbumSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/details/${this._id}`;
});

const Album = mongoose.model("Album", AlbumSchema)
export default Album;