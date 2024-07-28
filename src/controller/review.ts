import  { Request, Response, NextFunction } from "express";

import { User } from "../models/user";
import bcrypt from "bcrypt";
import {  sendCookie } from "../utils/features";
import ErrorHandler from "../middlewares/error";
import { BookReview } from "../models/book";

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        // if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
        if (!user) return res.json({ success: false, message: 'Invalid Email or Password' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.json({ success: false, message: 'Invalid Email or Password' });
        // return next(new ErrorHandler("Invalid Email or Password", 400));

        sendCookie(user.toJSON(), res, `Welcome back, ${user.name}`, 200);
    } catch (error) {
        next(error);
    }
};

export const AddReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { bookname, bookid, bookauthor, reviewtext, bookrating } = req.body;

        const {body} = req


        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
          }


          let bookReview = new BookReview(body);
          console.log("*** bookReview *** ", bookReview);
          bookReview
          .save()
            // .then(() => {
            //   console.log("****|||*****");
            //   return res.json({
            //     success: true,
            //     message: "Book Review added successfully!",
            //   });
            // })
        //     .catch((err) => console.log("err", err));
        //   console.log("bodyy", body);
        // } catch (err) {
            //   res.status(500).json({ error: err.message });
            // }
            
        console.log("*** bookReview 1 *** ", bookReview);
        sendCookie(bookReview.toJSON(), res, "Book Review Added Successfully", 201);

    } 

catch (error) {
        next(error);
    }
};

export const getMyProfile = (req: Request, res: Response) => {

    const {body} = req 
    
    res.status(200).json({
        success: true,
        user: body.user,
    });
};

export const logout = (req: Request, res: Response) => {
    res
        .status(200)
        .clearCookie("token", {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,    
        })
        .json({
            success: true,
            message: "Logged out successfully"
        });
};