
import { db } from '../config/db.js';




db.schema.hasTable('blogPosts').then(exists => {
    if (!exists) {
        return db.schema.createTable('blogPosts', (table) => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('content').notNullable();
        })
    }
}).catch(() => console.log('error starting database'));

export async function getPosts() {
    return await db('blogPosts').select();
}

export async function getSpecificPost(id) {
    return await db('blogPosts').select().where('id', id);
}

export async function addPost(title, content) {
    let newPost = await db('blogPosts').insert({title, content}, ['id', 'title', 'content']);
    return newPost;
}


export async function updatePost(id, title, content) {

    let updated = await db('blogPosts')
        .where({ id: id })
        .update({ title, content }, ['id', 'title', 'content']);
    if (updated.length === 0) {
        return undefined;
    }
    return updated;

}

export async function deletePost(id) {
    let deleted = await db('blogPosts').where({id:id}).del(['id', 'title', 'content']);
    return deleted;
}
