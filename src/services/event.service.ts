import * as eventDao from '../daos/event.dao';
import { SocialEvent } from '../models/SocialEvent';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';


export function getSocialEventsByEventId(id: number): Promise<SocialEvent[]> {
    return eventDao.getSocialEventsByEventId(id);
}

export function getPostsByEventId(id: number): Promise<Post[]> {
    return eventDao.getPostsByEventId(id);
}

export function getCommentsByPostId(id: number): Promise<Comment[]> {
    return eventDao.getCommentsByPostId(id);
}

// create new post
export function saveNewPost(post: any): Promise<Post> {
    const newPost = new Post(
        undefined,
        post.postContent,
        new Date(),
        post.image,
        post.eventId,
        post.userId
    );
    if ( post.postContent &&
        post.image &&
        post.eventId &&
        post.userId) {
        return eventDao.saveNewPost(newPost);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}

// create new comment
export function saveNewComment(comment: any): Promise<Comment> {
    const newComment = new Comment(
        undefined,
        comment.commentContent,
        new Date(),
        comment.image,
        comment.postId,
        comment.userId
    );
    if ( comment.commentContent &&
        comment.image &&
        comment.postId &&
        comment.userId) {
        return eventDao.saveNewComment(newComment);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
}