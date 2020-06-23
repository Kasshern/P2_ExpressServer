/* istanbul ignore file */
export class Comment {
    id: number;
    commentContent: string;
    creationTime: Date;
    image: string;
    postId: number;
    userId: number;

    static from(obj: CommentRow): Comment {
        const comment = new Comment(
            obj.id,
            obj.comment_content,
            new Date(obj.creation_time),
            obj.image,
            obj.post_id,
            obj.user_id
        );
        return comment;
    }

    constructor(id: number,
        commentContent: string,
        creationTime: Date,
        image: string,
        postId: number,
        userId: number
    ) {
        this.id = id;
        this.commentContent = commentContent;
        this.creationTime = creationTime;
        this.image = image;
        this.postId = postId;
        this.userId = userId;
    }
}

export interface CommentRow {
    id: number;
    comment_content: string;
    creation_time: Date;
    image: string;
    post_id: number;
    user_id: number;
}