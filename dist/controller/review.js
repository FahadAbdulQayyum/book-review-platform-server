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
exports.logout = exports.getMyProfile = exports.AddReview = exports.Login = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const features_1 = require("../utils/features");
const book_1 = require("../models/book");
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
        (0, features_1.sendCookie)(user.toJSON(), res, `Welcome back, ${user.name}`, 200);
    }
    catch (error) {
        next(error);
    }
});
exports.Login = Login;
const AddReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { bookname, bookid, bookauthor, reviewtext, bookrating } = req.body;
        const { body } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
        }
        let bookReview = new book_1.BookReview(body);
        console.log("*** bookReview *** ", bookReview);
        bookReview
            .save();
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
        (0, features_1.sendCookie)(bookReview.toJSON(), res, "Book Review Added Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.AddReview = AddReview;
const getMyProfile = (req, res) => {
    const { body } = req;
    res.status(200).json({
        success: true,
        user: body.user,
    });
};
exports.getMyProfile = getMyProfile;
const logout = (req, res) => {
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
exports.logout = logout;
