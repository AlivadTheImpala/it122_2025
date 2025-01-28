import Album from "../models/Album.js"
import asyncHandler from "express-async-handler"

export const album_list = asyncHandler(async (req, res, next) => {
    const allAlbums = await Album.find({}, "albumTitle artist").exec();

    res.render("index", { albums: allAlbums })
});


export const album_detail = asyncHandler(async (req, res, next) => {
    const album = await Album.findById(req.params.id).exec();

    if (album === null) {
        //no results
        const err = new Error("Album not found");
        err.status = 404;
        return next(err);

    }
    res.render("details", { album: album });
});