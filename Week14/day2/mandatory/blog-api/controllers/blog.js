import { getPosts, getSpecificPost, addPost, updatePost, deletePost } from "../models/postModel.js";

export async function getRoute(req, res) {
    try {
        let data = await getPosts();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching from database.' })
    }
}

export async function getSinglePost(req, res) {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({ msg: 'Id must be a number' });
        return;
    }
    try {
        let post = await getSpecificPost(id);
        if (post.length === 0) {
            res.status(404).json({ msg: 'Post not found' });
            return;
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching data' });
    }

}

export async function addSinglePost(req, res) {
    let { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({ msg: 'Missing mandatory data in body' });
        return;
    }
    try {
        let newPost = await addPost(title, content);
        res.status(201).json({ newPost });
    } catch (e) {
        res.status(500).json({ msg: "error posting data" })
    }

}


export async function updateSinglePost(req, res) {
    let id = Number(req.params.id);
    let { content, title } = req.body;

    if (!id || !content || !title) {
        res.status(400).json({ msg: 'improper request, make sure the the params and body are correct.' });
        return;
    }
    try {
        let updated = await updatePost(id, title, content);
        if (updated) {
            res.status(201).json({ updated });
        }
        res.status(404).json({ msg: 'post not found' });
    } catch (e) {
        res.status(500).json({ msg: 'error updating database' })
    }


}


export async function deleteSinglePost(req, res) {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({ msg: 'not a valid id' });
        return;
    }
    try {
        let deleted = await deletePost(id);
        if (deleted.length === 0) {
            res.status(404).json({ msg: 'post not found' });
            return;
        }
        res.status(200).json({ deleted });
    } catch (e) {
        res.status(500).json({ msg: 'error deleting from database' })
    }

}