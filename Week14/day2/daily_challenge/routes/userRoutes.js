
import Router from 'express';
import {getUsers, getUser, updateUser, addUser, loginUser} from '../controllers/userController.js';


export const router = Router();

router.get('/users', getUsers);
router.post('/register', addUser),
router.post('/login', loginUser),
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
