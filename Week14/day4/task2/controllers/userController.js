import { registerUserData, getUserData, getUsersData, updateUserData } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export async function getUsers(req, res) {
    try {
        const users = await getUsersData();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

export async function getUser(req, res) {
    const userId = +req.params.id;
    if (!userId) {
        res.status(400).json({ message: 'Invalid user ID' });
        return;
    }
    try {
        const user = await getUserData(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function registerUser(req, res) {
    const { firstName, lastName, email, username, password } = req.body;
    if (!firstName || !lastName || !email || !username || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    let users = await getUsersData();
    if (users.some(user => user.username === username)) {
        res.status(400).json({ message: 'Username already exists' });
        return;
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await registerUserData(firstName, lastName, email, username, hashedPassword);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function updateUser(req, res) {
    const userId = +req.params.id;
    const { firstName, lastName, email, username, password } = req.body;
    if (!userId || !firstName || !lastName || !email || !username || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    try {
        const updatedUser = await updateUserData(userId, firstName, lastName, email, username, password);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function loginUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    try {
        const users = await getUsersData();
        const user = users.find(user => user.username === username);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}