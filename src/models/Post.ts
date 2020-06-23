/* istanbul ignore file */
export class Post {
    id: number;
    postContent: string;
    creationTime: Date;
    image: string;
    eventId: number;
    userId: number;

    static from(obj: PostRow): Post {
        const post = new Post(
            obj.id,
            obj.post_content,
            new Date(obj.creation_time),
            obj.image,
            obj.event_id,
            obj.user_id
        );
        return post;
    }

    constructor(id: number,
        postContent: string,
        creationTime: Date,
        image: string,
        eventId: number,
        userId: number
    ) {
        this.id = id;
        this.postContent = postContent;
        this.creationTime = creationTime;
        this.image = image;
        this.eventId = eventId;
        this.userId = userId;
    }
}

export interface PostRow {
    id: number;
    post_content: string;
    creation_time: Date;
    image: string;
    event_id: number;
    user_id: number;
}