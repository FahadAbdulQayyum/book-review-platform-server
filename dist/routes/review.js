"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const review_1 = require("../controller/review");
const auth_1 = require("../middlewares/auth");
router.post('/add', auth_1.isAuthenticated, review_1.AddReview);
router.put('/update/:id', auth_1.isAuthenticated, review_1.UpdateReview);
router.delete('/delete/:id', auth_1.isAuthenticated, review_1.DeleteReview);
router.get('/getmyreview/:id', auth_1.isAuthenticated, review_1.GetMyReviews);
router.get('/getallreviews', auth_1.isAuthenticated, review_1.GetAllReviews);
exports.default = router;
