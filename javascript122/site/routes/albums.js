import express from "express";
const router = express.Router();

import { album_list, album_detail } from "../controllers/albumController.js"

//GET request for list of all albums
router.get("/", album_list);

//GET request for one Album
router.get("/details/:id", album_detail);



export default router;