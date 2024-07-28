import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IBook extends Document {
    // _id: ObjectId;
    _id: mongoose.Types.ObjectId;
    bookName: string;
    bookId: string;
    bookAuthor: string;
    bookReviewText: string;
    bookRating: string;
    createdAt: Date;
}

const BookReviewSchema: Schema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    bookId: {
        type: String,
        required: true,
    },
    bookAuthor: {
        required: true,
        type: String,
    },
    bookReviewText: {
        required: true,
        type: String,
    },
    bookRating: {
        required: true,
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const BookReview = mongoose.model<IBook>("BookReview", BookReviewSchema);