
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { createUserDB, fetchUserDB } from "../models/userModel.js";

export const JWT_SECRET_KEY = "123456";

// Creates a new user in the db
export const createUser = async (req, res) => {
    let {username, email, password} = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({msg: 'Missing user data'});
    }else if (password.length < 6) {
        return res.status(400).json({msg: "password must be at least 6 characters"})
    }

    const HashedPassword = await bcrypt.hash(password, 10);
    try {
        let newUser = await createUserDB(username, email, HashedPassword);
        let token = generateJWT(newUser);
        res.cookie('token', token, {httpOnly:true});
        return res.status(201).json({msg: 'user created', user: newUser, token});
    }catch (e) {
        if (e.code === 1000) {
            return res.status(400).json({msg: e.message});
        }else if (e.code === 1001) {
            return res.status(400).json({msg: e.message});
        }else {
            return res.status(500).json({msg: 'something went wrong creating new user.'})
        }
    }
    
}


export const loginUser = async (req, res) => {
    let {username, password} = req.body;

    let user;
    try {
        user = await fetchUserDB(username);
    } catch (e) {
        if (e.code === 404) {
            return res.status(400).json({msg: "username not found"});
        }
        return res.status(500).json({msg: "something went wrong while looking for username"});
    }

    // compare password 
    let isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        let token = generateJWT(user);
        let refreshToken = generateJWT(user, '7d');
        res.cookie('token', token, {httpOnly:true});
        res.cookie('refreshToken', refreshToken, {httpOnly: true});
        return res.status(200).json({msg: "Sign in successful", token});
    }
    res.status(401).json({msg: "incorrect password / username"});
} 

function generateJWT(user, expiresIn='1h') {
    let token = jwt.sign({username: user.username, email: user.email}, JWT_SECRET_KEY, {expiresIn});
    return token;
}

export async function refreshToken(req, res) {
    let refreshToken = req.cookies.refreshToken;
    jwt.verify(refreshToken, JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({msg: "Invalid refresh token"})
        }
        res.cookie('token', generateJWT(user), {httpOnly: true});
        res.status(200).json({msg: "refresh successful"});
    })
}

// authorized level route 

export async function authGreeting(req, res) {
    res.status(200).json({msg:`Hello ${req.user.username}`})
}