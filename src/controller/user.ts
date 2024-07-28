import express, { Express, Request, Response } from "express";
const router = express.Router();

export const Login = async (req: Request, res: Response) => {
    try {
        const {body} = req
        res?.status(200)?.json({name:"Crazy People!", body: body});
    } catch (err) {

    }
}
