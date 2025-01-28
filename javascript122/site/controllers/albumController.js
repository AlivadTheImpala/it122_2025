import Album from "../models/Album.js"
import asyncHandler from "express-async-handler"

export const album_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Album list");
});


export const album_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Album detail: ${req.params.id}`);
});