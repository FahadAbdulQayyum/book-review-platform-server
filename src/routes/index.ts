import express from "express"
import userRouter from './user'
import reviewRouter from './review'

const router = express.Router();

router.use('/user', userRouter)
router.use('/review', reviewRouter)

export default router;