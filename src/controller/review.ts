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
          console.log("*** bookReview *** ", bookReview);
          bookReview.save()            
          console.log("*** bookReview 1 *** ", bookReview);
          sendCookie(bookReview.toJSON(), res, "Book Review Added Successfully", 201);
    } 
catch (error) {
        next(error);
    }
};

export const UpdateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {body} = req

        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
          }

console.log('reqqqq...', req)

        // //   const updatedReview = await BookReview.findByIdAndUpdate(
        //   const updatedReview = await BookReview.findByIdAndUpdate(
        //     req.body._id,
        //     req.body
        //   );

        //   if (!updatedReview) {
        //     return res.status(404).send({ success: false, message: "Review not found" });
        // }

        //   sendCookie(updatedReview.toJSON(), res, "Book Review Updated Successfully", 201);
        res.json({let:"seee"})
    } 
catch (error) {
        next(error);
    }
};