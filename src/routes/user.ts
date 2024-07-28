import express, { Express, Request, Response } from "express";
const router = express.Router();
import {Login, Register} from "../controller/user"

router.post('/login', Login)
router.post('/signup', Register)
// router.get('/login', Login)


export default router;