"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default
        .connect(process.env.DB_URL || '', {
        dbName: "backendapi",
    })
        .then((c) => console.log(`Database Connected with ${c.connection.host}`))
        .catch((e) => console.log(e));
    // mongoose.connect(
    //     process.env.MONGO_URI, { dbName: "backendapi1" },
    //     { useNewUrlParser: true, useUnifiedTopology: true },
    //     () => {
    //         console.log('Connected to MongoDB');
    //     }
    // );
};
exports.connectDB = connectDB;
// let driverURL: string = process.env.DB_URL || ''
// console.log('********')
// mongoose.connect(driverURL);
// export {mongoose}
