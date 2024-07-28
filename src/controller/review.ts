import  { Request, Response, NextFunction } from "express";

import { User } from "../models/user";
import bcrypt from "bcrypt";
import {  sendCookie } from "../utils/features";
import ErrorHandler from "../middlewares/error";
import { BookReview } from "../models/book";

export const AddReview = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {body} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
          }

          let bookReview = new BookReview(body);
          bookReview.save()            
          sendCookie(bookReview.toJSON(), res, "Book Review Added Successfully", 201);
    } 
catch (error) {
        next(error);
    }
};

export const GetMyReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {body, params: {id}} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
          }

          const myBookReview = await BookReview.find({userId: id});

          if (!myBookReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }          

        //   sendCookie(myBookReview.toJSON(), res, "Your Book Review(s) Fetched Successfully", 201);
        res.status(201).json({success: true, message: "Your Books Review Fetched Successfully!", data: myBookReview})
    } 
catch (error) {
        next(error);
    }
};

export const GetAllReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {body} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
          }

          const allBookReviews = await BookReview.find({});

          console.log(">>>> all book reviews <<<<", allBookReviews)

          if (!allBookReviews) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }          

        res.status(201).json({success: true, message: "All Books Review Fetched Successfully!", data: allBookReviews})
    } 
catch (error) {
        next(error);
    }
};

export const UpdateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {params:{id}} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
          }

          const updatedReview = await BookReview.findByIdAndUpdate(
            id,
            req.body
          );

          if (!updatedReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }

          sendCookie(updatedReview.toJSON(), res, "Book Review Updated Successfully", 201);
    } 
catch (error) {
        next(error);
    }
};

export const DeleteReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {params:{id}} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
          }

          const deletedBookReview = await BookReview.findByIdAndDelete(
            id
          );
 
          if (!deletedBookReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }

          sendCookie(deletedBookReview.toJSON(), res, "Book Review Deleted Successfully", 201);
    } 
catch (error) {
        next(error);
    }
};