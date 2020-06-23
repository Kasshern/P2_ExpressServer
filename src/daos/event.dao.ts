/* istanbul ignore file */
import { db } from './db';
import { SocialEvent, SocialEventRow } from '../models/SocialEvent';
import { PostRow } from '../models/Post';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { CommentRow } from '../models/Comment';




// Gets social event by event id 
export async function getSocialEventsByEventId(id: number): Promise<SocialEvent[]> {
    const sql = 'SELECT * FROM events INNER JOIN event_types ON event_type_id = event_types.id WHERE events.id = $1';

    const result = await db.query<SocialEventRow>(sql, [id]);
        return result.rows.map(SocialEvent.from);
}

// Get posts by the event id 
export async function getPostsByEventId(id: number): Promise<Post[]> {
    const sql = 'SELECT * from posts WHERE posts.event_id = $1';

    const result = await db.query<PostRow>(sql, [id]);
        return result.rows.map(Post.from);
}

// get all comments by post id 
export async function getCommentsByPostId(id: number): Promise<Comment[]> {
    const sql = 'SELECT * from user_comments WHERE user_comments.post_id = $1';

    const result = await db.query<CommentRow>(sql, [id]);
        return result.rows.map(Comment.from);
}

//save a new post 
export async function saveNewPost(post: Post): Promise<Post> {
    const sql = `INSERT INTO posts (post_content, creation_time, image, event_id, user_id) \
     VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await db.query<PostRow>(sql, [
        post.postContent,
        new Date(),
        post.image,
        post.eventId,
        post.userId
    ]);

    return result.rows.map(Post.from)[0];
}

export async function saveNewComment(comment: Comment): Promise<Comment> {
    const sql = `INSERT INTO user_comments (comment_content, creation_time, image, post_id, user_id) \
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await db.query<CommentRow>(sql, [
        comment.commentContent,
        new Date(),
        comment.image,
        comment.postId,
        comment.userId
    ]);

    return result.rows.map(Comment.from)[0];
}