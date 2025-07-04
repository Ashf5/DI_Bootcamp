
import { registerUser, getUserData, getUsersData, getUserPassword, updateUserInfo } from "../models/registration.js";
import bcrypt from 'bcrypt';


export async function getUsers(req, res) {
    try {
        let usersData = await getUsersData();
        res.status(200).json(usersData);
    } catch (e) {
        console.log(e)
        res.status(500).json({ msg: 'error fetching user data from database' });
    }
}

export async function getUser(req, res) {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({ msg: "invalid id provided" });
        return;
    }

    try {
        let userData = await getUserData(id);
        if (userData.length === 0) {
            res.status(404).json({ msg: 'user not found.' });
            return;
        }
        res.status(200).json(userData);
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'error fetching user from database' });
    }
}


export async function updateUser(req, res) {
    let id = Number(req.params.id);
    let { email, firstName, lastName } = req.body;

    if (!id || !email || !firstName || !lastName) {
        res.status(400).json({ msg: 'request missing information, id, email, firstName, lastName are mandatory' });
        return;
    }

    try {
        let updatedUser = await updateUserInfo(id, email, firstName, lastName);
        res.status(201).json(updatedUser);
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'error updating database.' })
    }

}

export async function addUser(req, res) {
    let { username, password, email, firstName, lastName } = req.body;
    if (!username || !password || !email || !firstName || !lastName) {
        res.status(400).json({ msg: 'request missing mandatory data.' });
        return;
    }

    let hashedPassword = await hashPassword(password);
    console.log(hashedPassword)
    try {
        let addedUser = await registerUser(username, hashedPassword, email, firstName, lastName);
        res.status(201).json({ created: addedUser });
    } catch (e) {
        if (e.code === '23505' && e.constraint === 'users_username_key') {
            return res.status(409).json({ error: 'Username already exists' });
        }
        console.log(e);
        res.status(500).json({ msg: 'error adding user' });
    }
}


export async function loginUser(req, res) {
    let {username, password} = req.body;
    if(!username || !password) {
        res.status(400).json({msg: "username and password are mandatory"});
        return;
    }
    try{
        let user = await getUserPassword(username);
        if (!user) {
            res.status(404).json({msg: 'username not found'});
            return;
        }
        
        let match = await comparePasswords(password, user[0].password);
        if (!match) {
            res.status(401).json({msg: 'incorrect password'});
            return;
        }
        res.status(200).json({username: 'You are now logged in!'});
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error while authenticating'});
    }
    
    
}

const saltRounds = 10;
async function hashPassword(password) {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

async function comparePasswords(inputPassword, hashedPassword) {
    let match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
}