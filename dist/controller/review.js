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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReview = exports.UpdateReview = exports.GetAllReviews = exports.GetMyReviews = exports.AddReview = void 0;
const features_1 = require("../utils/features");
const book_1 = require("../models/book");
const AddReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
        }
        let bookReview = new book_1.BookReview(body);
        bookReview.save();
        (0, features_1.sendCookie)(bookReview.toJSON(), res, "Book Review Added Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.AddReview = AddReview;
const GetMyReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id } } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
        }
        const myBookReview = yield book_1.BookReview.find({ userId: id });
        if (!myBookReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }
        //   sendCookie(myBookReview.toJSON(), res, "Your Book Review(s) Fetched Successfully", 201);
        res.status(201).json({ success: true, message: "Your Books Review Fetched Successfully!", data: myBookReview });
    }
    catch (error) {
        next(error);
    }
});
exports.GetMyReviews = GetMyReviews;
const GetAllReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
        }
        const allBookReviews = yield book_1.BookReview.find({});
        console.log(">>>> all book reviews <<<<", allBookReviews);
        if (!allBookReviews) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }
        res.status(201).json({ success: true, message: "All Books Review Fetched Successfully!", data: allBookReviews });
    }
    catch (error) {
        next(error);
    }
});
exports.GetAllReviews = GetAllReviews;
const UpdateReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
        }
        const updatedReview = yield book_1.BookReview.findByIdAndUpdate(id, req.body);
        if (!updatedReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }
        (0, features_1.sendCookie)(updatedReview.toJSON(), res, "Book Review Updated Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.UpdateReview = UpdateReview;
const DeleteReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
        }
        const deletedBookReview = yield book_1.BookReview.findByIdAndDelete(id);
        if (!deletedBookReview) {
            return res.status(404).send({ success: false, message: "Review not found" });
        }
        (0, features_1.sendCookie)(deletedBookReview.toJSON(), res, "Book Review Deleted Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.DeleteReview = DeleteReview;
