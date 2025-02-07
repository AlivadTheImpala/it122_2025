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

router.get("/api/albums/", (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            console.log(res.json(albums));
        }).catch(err => next(err));
})

export default router;