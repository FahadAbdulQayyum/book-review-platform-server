import express, { Express, Request, Response } from "express";
const router = express.Router();
import {AddReview, UpdateReview} from "../controller/review"
import { isAuthenticated } from "../middlewares/auth";

router.post('/addreview', isAuthenticated, AddReview)
router.put('/updatereview/:id', isAuthenticated, UpdateReview)


export default router;