import  { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    console.log('token', token)
    if (!token)
        return res.status(404).json({
            success: false,
            message: "Login First",
        });

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

    // req.user = await User.findById(decoded._id);
    next();
};