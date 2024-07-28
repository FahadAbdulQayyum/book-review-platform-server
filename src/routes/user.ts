import express, { Express, Request, Response } from "express";
const router = express.Router();
import {Login} from "../controller/user"

router.post('/login', Login)
// router.get('/login', Login)


export default router;