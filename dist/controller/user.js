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
exports.logout = exports.getMyProfile = exports.Register = exports.Login = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.User.findOne({ email }).select("+password");
        // if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
        if (!user)
            return res.json({ success: false, message: 'Invalid Email or Password' });
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return res.json({ success: false, message: 'Invalid Email or Password' });
        // return next(new ErrorHandler("Invalid Email or Password", 400));
        // sendCookie(user, res, `Welcome back, ${user.name}`, 200);
    }
    catch (error) {
        next(error);
    }
});
exports.Login = Login;
// export const register = async (req, res) => {
const Register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        // let user = await User.findOne({ email });
        // // if (user) return next(new ErrorHandler("User Already Exist", 400));
        // if (user) return res.json({ success: false, message: 'User already exists' });
        // const hashedPassword = await bcrypt.hash(password, 10);
        // user = await User.create({ name, email, password: hashedPassword });
        // sendCookie(user, res, "Registered Successfully", 201);
        return res.json({ success: true, data: req.body });
    }
    catch (error) {
        next(error);
    }
});
exports.Register = Register;
const getMyProfile = (req, res) => {
    res.status(200).json({
        success: true,
        // user: req.user,
    });
};
exports.getMyProfile = getMyProfile;
const logout = (req, res) => {
    res
        .status(200)
        .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
        .json({
        success: true,
        // user: req.user,
    });
};
exports.logout = logout;
// import  { Request, Response } from "express";
// export const Login = async (req: Request, res: Response) => {
//     try {
//         const {body} = req
//         res?.status(200)?.json({name:"Crazy People!", body: body});
//     } catch (err) {
//     }
// }
