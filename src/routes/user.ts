import express, { Express, Request, Response } from "express";

const router = express.Router();

router.use('/', async (req: Request, res: Response) => {
    try {
        res?.status(200)?.json("Crazy People!");
    } catch (err) {

    }
});

export default router;