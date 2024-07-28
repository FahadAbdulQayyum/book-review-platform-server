"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = require("../controller/user");
const auth_1 = require("../middlewares/auth");
router.get('/auth', auth_1.isAuthenticated, user_1.getMyProfile);
router.post('/login', user_1.Login);
router.post('/signup', user_1.Register);
// router.get('/login', Login)
exports.default = router;
