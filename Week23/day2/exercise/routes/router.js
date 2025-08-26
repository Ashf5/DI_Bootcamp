
import { Router } from "express";
import { authGreeting, createUser, loginUser, refreshToken } from "../controllers/userController.js";
import { verifyJWT } from "../middleware/auth.js";

export let router = Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/greet', verifyJWT, authGreeting);
router.get('/refresh', refreshToken);