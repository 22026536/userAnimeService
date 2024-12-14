import express from "express";
import { userComment, userRate, userUnRate, userWatch } from "../controllers/user.js";

const routerUserAnime = express.Router()
routerUserAnime.post("/watch",userWatch)
routerUserAnime.post("/comment",userComment)
routerUserAnime.post("/rate",userRate)
routerUserAnime.post("/unrate",userUnRate)
export default routerUserAnime;