import express from "express";
import Album from "../models/Album.js"
const router = express.Router();


//GET request for list of all albums
router.get("/", (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.render("index-react", { albums: JSON.stringify(albums) });
        })
        .catch(err => next(err));
});
//end get /

router.get("/album/:id", (req, res, next) => {
    Album.findById({ "_id": req.params.id }).lean()
        .then((album) => {
            res.render("details", { album: album });
        })
        .catch(err => next(err));
});
//end get /album/:id

//api request for all albums
router.get("/api/albums/", (req, res, next) => {
    Album.find({}).lean()
        .then((albums) => {
            res.json(albums);
        }).catch(err => next(err));
});
//end get api/albums

//api request for one album based on title
router.get("/api/albums/:title", (req, res, next) => {
    Album.findOne({ "albumTitle": req.params.title }).lean()
        .then((album) => {
            res.json(album);
        }).catch(err => next(err));
});
//end get api/albums/:title

router.post("/api/albums/add", (req, res, next) => {
    // console.log(req.body);

    Album.updateOne({ 'albumTitle': req.body.albumTitle }, req.body, { upsert: true }).lean()
        .then((result) => {
            console.log(result);

            if (result.upsertedCount > 0) {
                res.status(201).json({ message: "new entries added to database" });
            } else if (result.upsertedCount == 0 && result.modifiedCount > 0) {
                res.status(200).json({ message: "entries modified" });
            } else {
                res.status(200).json({ message: "entries already exist" }); //if nothing is modified or upserted, then we just matched an existing entry. 
            }

        })
        .catch(err => next(err));
});
//end post api/albums/add

//delete api rout to go here

router.delete("/api/album/remove", (req, res, next) => {
    Album.findOneAndDelete({ 'albumTitle': req.body.albumTitle })
        .then((deletedAlbum) => {
            if (!deletedAlbum) {
                res.status(404).json({ error: "Album not found." })
            }
            res.json({ message: "Album deleted.", deletedAlbum });
        })
        .catch(err => next(err))
})

export default router;