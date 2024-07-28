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
exports.UpdateReview = exports.AddReview = void 0;
const features_1 = require("../utils/features");
const book_1 = require("../models/book");
const AddReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data entered)" });
        }
        let bookReview = new book_1.BookReview(body);
        console.log("*** bookReview *** ", bookReview);
        bookReview.save();
        console.log("*** bookReview 1 *** ", bookReview);
        (0, features_1.sendCookie)(bookReview.toJSON(), res, "Book Review Added Successfully", 201);
    }
    catch (error) {
        next(error);
    }
});
exports.AddReview = AddReview;
const UpdateReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!req.body) {
            return res.send({ success: false, message: "Empty (No data provided)" });
        }
        console.log('reqqqq...', req);
        // //   const updatedReview = await BookReview.findByIdAndUpdate(
        //   const updatedReview = await BookReview.findByIdAndUpdate(
        //     req.body._id,
        //     req.body
        //   );
        //   if (!updatedReview) {
        //     return res.status(404).send({ success: false, message: "Review not found" });
        // }
        //   sendCookie(updatedReview.toJSON(), res, "Book Review Updated Successfully", 201);
        res.json({ let: "seee" });
    }
    catch (error) {
        next(error);
    }
});
exports.UpdateReview = UpdateReview;
