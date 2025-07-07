
import { getUser, getUsers, registerUser, updateUser, loginUser } from "../controllers/userController.js";
import Router from 'express';

export const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/users/:id', updateUser);