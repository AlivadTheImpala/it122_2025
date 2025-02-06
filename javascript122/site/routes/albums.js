import express from "express";
import Album from "../models/Album.js"
const router = express.Router();
import asyncHandler from "express-async-handler"

// import { album_list, album_detail } from "../controllers/albumController.js"

//GET request for list of all albums
router.get("/", asyncHandler(async (req, res, next) => {
    const allAlbums = await Album.find({}, "albumTitle artist").exec();

    res.render("index", { albums: allAlbums })
}));

//GET request for a single album
router.get("/details/:id", asyncHandler(async (req, res, next) => {
    const album = await Album.findById(req.params.id).exec();

    if (album === null) {
        //no results
        const err = new Error("Album not found");
        err.status = 404;
        return next(err);

    }
    res.render("details", { album: album });
}));




export default router;