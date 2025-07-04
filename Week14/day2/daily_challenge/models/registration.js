
import { db } from '../config/db.js';


export async function registerUser(username, password, email, firstName, lastName) {
    return await db.transaction(async (trx) => {
        const [usernameInserted] = await trx('users').insert({username, email, first_name: firstName, last_name: lastName}, ['username']);
        await trx('hashpwd').insert({username, password});
        return usernameInserted;
    })
}


export async function getUsersData() {
    let userData = await db('users').select();
    return userData;
}


export async function getUserData(id) {
    let userData = await db('users').select().where({'id': id});
    return userData;
}

export async function getUserPassword(username) {
    let userPassword = await db('hashpwd').select('username', 'password').where({username});
    return userPassword;
}


export async function updateUserInfo(id, email, firstName, lastName) {
    let updated = await db('users').update({email, first_name: firstName, last_name: lastName }, ['username', 'email', 'first_name', 'last_name']).where({id});
    return updated;

}
