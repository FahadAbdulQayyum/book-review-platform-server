import express, { Express, Request, Response } from "express";
const router = express.Router();
import {getMyProfile, Login, Register} from "../controller/user"
import { isAuthenticated } from "../middlewares/auth";

router.get('/auth',isAuthenticated, getMyProfile)
router.post('/login', Login)
router.post('/signup', Register)
// router.get('/login', Login)


export default router;