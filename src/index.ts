import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import Routes from './routes'

dotenv.config();

import mongoose from "mongoose"

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('err', err);
});

db.on('open', async () => {
    console.log('Db is running!')
});


app.use("/api", Routes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});