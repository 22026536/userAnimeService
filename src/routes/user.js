import express from "express";
import { userComment, userRate, userUnRate, userWatch } from "../../controllers/user/user.js";

const routerUser = express.Router()
routerUser.post("/watch",userWatch)
routerUser.post("/comment",userComment)
routerUser.post("/rate",userRate)
routerUser.post("/unrate",userUnRate)
export default routerUser;