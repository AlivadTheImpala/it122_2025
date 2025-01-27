// File: ./models/Album.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    albumTitle: { type: String, required: true },
    artist: { type: String, required: true },
    released: { type: Date },
    genre: { type: String, required: true },
});

// Virtual for author's URL
AlbumSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/details/${this._id}`;
});

module.exports = mongoose.model("Album", AlbumSchema);