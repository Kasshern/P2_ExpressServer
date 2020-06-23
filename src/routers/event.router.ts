import express from 'express';
import * as eventService from '../services/event.service';
import { SocialEvent } from '../models/SocialEvent';
import * as authenticator from './authentication.router';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';


export const eventRouter = express.Router();

// get all events by event ID //!WORKS
eventRouter.get('/:id/event', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let socialEvents: SocialEvent[];

    try {
        socialEvents = await eventService.getSocialEventsByEventId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!socialEvents) {
        response.sendStatus(404);
    } else {
        response.json(socialEvents);
    }
    next();
});

// get all posts by event ID //!WORKS
eventRouter.get('/:id/post', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let posts: Post[];

    try {
        posts = await eventService.getPostsByEventId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!posts) {
        response.sendStatus(404);
    } else {
        response.json(posts);
    }
    next();
});

// get all comments by event ID  //!WORKS
eventRouter.get('/:id/comment', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let comments: Comment[];

    try {
        comments = await eventService.getCommentsByPostId(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!comments) {
        response.sendStatus(404);
    } else {
        response.json(comments);
    }
    next();
});


// post new event post    //!WORKS
eventRouter.post('/post/post', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const post = request.body;
    // console.log('IMAGE FILE', reimbursement)
    let newPost: Post;

    try {
        newPost = await eventService.saveNewPost(post);
        response.status(201);
        response.json(newPost);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});

// post new event  comment  //!WORKS
eventRouter.post('/post/comment', /*authenticator.authenticateJWT,*/ async (request, response, next) => {
    const comment = request.body;
    // console.log('IMAGE FILE', reimbursement)
    let newComment: Comment;

    try {
        newComment = await eventService.saveNewComment(comment);
        response.status(201);
        response.json(newComment);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});



