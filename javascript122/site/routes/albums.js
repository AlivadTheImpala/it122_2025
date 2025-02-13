import express from "express";
import Album from "../models/Album.js"
const router = express.Router();


//GET request for list of all albums
router.get("/", (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.render("index", { albums });
        })
        .catch(err => next(err));
});

router.get("/album/:id", (req, res, next) => {
    Album.findById({ "_id": req.params.id }).lean()
        .then((album) => {
            res.render("details", { album: album });
        })
        .catch(err => next(err));
})

//api request for all albums
router.get("/api/albums/", (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.json(albums);
        }).catch(err => next(err));
})

//api request for one album based on title
router.get("/api/albums/:title", (req, res, next) => {
    Album.findOne({ "albumTitle": req.params.title }).lean()
        .then((album) => {
            res.json(album);
        }).catch(err => next(err));
})

router.post("/api/albums/add", (req, res, next) => {
    console.log(req.body);
    // newAlbum.save()
    Album.updateOne({ 'albumTitle': req.body.albumTitle }, req.body, { upsert: true }).lean()
        .then((result) => {
            console.log(result);
            if (result.upsertedCount > 0) {
                res.status(201).json({ message: "new entries added to database" });
            } else if (result.upsertedCount == 0 && result.modifiedCount > 0) {
                res.status(201).json({ message: "entries modified" });
            } else {
                res.status(201).json({ message: "entries already exist" });
            }

        })
        .catch(err => next(err));
});

export default router;