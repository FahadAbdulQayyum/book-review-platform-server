"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
let driverURL = `mongodb+srv://jasad080:jasad080@cluster0.vugxc7n.mongodb.net/?retryWrites=true&w=majority`; //upStart
mongoose_1.default.connect(driverURL);
// const mongoose = require('mongoose');
// // let driverURL= `mongodb+srv://fahad:fahad@contactmanager.abu8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// let driverURL = `mongodb+srv://jasad080:jasad080@cluster0.vugxc7n.mongodb.net/?retryWrites=true&w=majority` //upStart
// mongoose.connect(driverURL);
// module.exports = mongoose
