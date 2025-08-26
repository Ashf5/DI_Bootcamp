import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../controllers/userController.js';

export function verifyJWT(req, res, next) {
    const token = req.cookies.token ||  req.body.token;
    if (!token) {
        return res.status(401).json({msg: "no token found"})
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({msg: "token verification failed"});
        }
        req.user = user;
        next()
    })
}