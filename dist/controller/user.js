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
exports.logout = exports.UpdateProfile = exports.getMyProfile = exports.Register = exports.Login = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
// import { IIUser, sendCookie } from "../utils/features";
const features_1 = require("../utils/features");
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
const Register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        let user = yield user_1.User.findOne({ email });
        // // if (user) return next(new ErrorHandler("User Already Exist", 400));
        if (user)
            return res.json({ success: false, message: 'User already exists' });
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        user = yield user_1.User.create({ name, email, password: hashedPassword });
        (0, features_1.sendCookie)(user.toJSON(), res, "Registered Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.Register = Register;
const getMyProfile = (req, res) => {
    const { body } = req;
    res.status(200).json({
        success: true,
        user: body.user,
    });
};
exports.getMyProfile = getMyProfile;
const UpdateProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('UpdateProfile called....');
    try {
        const { params: { id } } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
        }
        const updatedProfile = yield user_1.User.findByIdAndUpdate(id, req.body);
        if (!updatedProfile) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }
        (0, features_1.sendCookie)(updatedProfile.toJSON(), res, "Profile Updated Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.UpdateProfile = UpdateProfile;
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
