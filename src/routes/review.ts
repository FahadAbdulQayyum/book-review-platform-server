import express, { Express, Request, Response } from "express";
const router = express.Router();
import {AddReview, UpdateReview, GetMyReviews, GetAllReviews, DeleteReview} from "../controller/review"
import { isAuthenticated } from "../middlewares/auth";

router.post('/add', isAuthenticated, AddReview)
router.put('/update/:id', isAuthenticated, UpdateReview)
router.delete('/delete/:id', isAuthenticated, DeleteReview)
router.get('/getmyreview/:id', isAuthenticated, GetMyReviews)
router.get('/getallreviews', isAuthenticated, GetAllReviews)


export default router;