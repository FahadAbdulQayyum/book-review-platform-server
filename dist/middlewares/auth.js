"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    console.log('HHHEEEELLLLOOOO');
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Login First",
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = yield user_1.User.findById(decoded._id).exec();
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // req.user = user as any;
        // req.user = user as IIUser;
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });
    }
});
exports.isAuthenticated = isAuthenticated;
// import { Request, Response, NextFunction } from "express";
// import { User, IUser } from "../models/user";
// import jwt from "jsonwebtoken";
// interface DecodedToken {
//     _id: string;
//     iat: number;
//     exp: number;
// }
// export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
//     const { token } = req.cookies;
//     if (!token) {
//         return res.status(404).json({
//             success: false,
//             message: "Login First",
//         });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
//         const user = await User.findById(decoded._id).exec();
//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found",
//             });
//         }
//         // req.user = user;
//         req.user = user as IUser;
//         next();
//     } catch (error) {
//         return res.status(401).json({
//             success: false,
//             message: "Invalid Token",
//         });
//     }
// };
// // import { Request, Response, NextFunction } from "express";
// // import { User, IUser } from "../models/user";
// // import jwt from "jsonwebtoken";
// // import { ObjectId } from "mongoose";
// // interface DecodedToken {
// //     _id: string;
// //     iat: number;
// //     exp: number;
// // }
// // export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
// //     const { token } = req.cookies;
// //     if (!token) {
// //         return res.status(404).json({
// //             success: false,
// //             message: "Login First",
// //         });
// //     }
// //     try {
// //         const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
// //         const user = await User.findById(decoded._id).exec();
// //         if (!user) {
// //             return res.status(404).json({
// //                 success: false,
// //                 message: "User not found",
// //             });
// //         }
// //         req.user = user as IUser;
// //         next();
// //     } catch (error) {
// //         return res.status(401).json({
// //             success: false,
// //             message: "Invalid Token",
// //         });
// //     }
// // };
// // // import { Request, Response, NextFunction } from "express";
// // // import { User, IUser } from "../models/user";
// // // import jwt from "jsonwebtoken";
// // // import { Document, ObjectId } from "mongoose";
// // // interface DecodedToken {
// // //     _id: string;
// // //     iat: number;
// // //     exp: number;
// // // }
// // // export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
// // //     const { token } = req.cookies;
// // //     if (!token) {
// // //         return res.status(404).json({
// // //             success: false,
// // //             message: "Login First",
// // //         });
// // //     }
// // //     try {
// // //         const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
// // //         // const user = await User.findById(decoded._id) as IUser;
// // //         const user = await User.findById(decoded._id).exec();
// // //         if (!user) {
// // //             return res.status(404).json({
// // //                 success: false,
// // //                 message: "User not found",
// // //             });
// // //         }
// // //         // req.user = user as IUser & Document;
// // //         req.user = user as IUser;
// // //         next();
// // //     } catch (error) {
// // //         return res.status(401).json({
// // //             success: false,
// // //             message: "Invalid Token",
// // //         });
// // //     }
// // // };
// // // // import  { Request, Response, NextFunction } from "express";
// // // // import { User, IUser } from "../models/user";
// // // // import jwt from "jsonwebtoken";
// // // // interface DecodedToken {
// // // //     _id: string;
// // // //     iat: number;
// // // //     exp: number;
// // // // }
// // // // export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
// // // //     const { token } = req.cookies;
// // // //     console.log('token', token)
// // // //     if (!token)
// // // //         return res.status(404).json({
// // // //             success: false,
// // // //             message: "Login First",
// // // //         });
// // // //     }
// // // //     // // const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //     // const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
// // // //     // req.user = await User.findById(decoded._id);
// // // //     // next();
// // // //     try {
// // // //         const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
// // // //         const user = await User.findById(decoded._id);
// // // //         if (!user) {
// // // //             return res.status(404).json({
// // // //                 success: false,
// // // //                 message: "User not found",
// // // //             });
// // // //         }
// // // //         req.user = user;
// // // //         next();
// // // //     } catch (error) {
// // // //         return res.status(401).json({
// // // //             success: false,
// // // //             message: "Invalid Token",
// // // //         });
// // // // }
// // // // };
