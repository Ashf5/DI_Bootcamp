import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();
let {PORT, USER, PASSWORD} = process.env;

export let db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: USER,
        password: PASSWORD,
        database: 'node',
        port: PORT
    }
});