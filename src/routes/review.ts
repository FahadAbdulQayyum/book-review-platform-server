import express, { Express, Request, Response } from "express";
const router = express.Router();
import {AddReview} from "../controller/review"
import { isAuthenticated } from "../middlewares/auth";

// router.get('/getreview',isAuthenticated, getMyProfile)
router.post('/addreview', isAuthenticated, AddReview)
router.post('/updatereview/:id', isAuthenticated, AddReview)


export default router;