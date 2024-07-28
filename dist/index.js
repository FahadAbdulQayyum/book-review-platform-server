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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import cors from "cors";
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// app.use(cors());
const db = mongoose_1.default.connection;
db.on('error', (err) => {
    console.log('err', err);
});
db.on('open', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Db is running!');
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
// const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
// const app = express();
// const port = process.env.PORT;
// app.get('/', (req, res) => {
//     res.send('Express + TypeScript Server');
// });
// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://localhost:${port}`);
// });
