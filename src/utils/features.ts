import { Response } from "express";
import jwt from "jsonwebtoken";

interface User {
    _id: string;
    // Add other user properties if needed
}

export const sendCookie = (user:User, res: Response, message:string, statusCode:number = 200) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res
        .status(statusCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        })
        .json({
            success: true,
            message,
            user: user
        });
};