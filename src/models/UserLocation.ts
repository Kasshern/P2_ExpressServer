/* istanbul ignore file */
export class PostLocation {
    id: number;
    city: string;
    state: string;
    streetName: string;
    streetNumber: number;
    userId: number;

    static from(obj: PostLocationRow): PostLocation {
        const postLocation = new PostLocation(
            obj.id,
            obj.city,
            obj.state,
            obj.street_name,
            obj.street_number,
            obj.user_id
        );
        return postLocation;
    }

    constructor(id: number, city: string, state: string, streetName: string, streetNumber: number, userId: number ) {
        this.id = id;
        this.city = city;
        this.state = state;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.userId = userId;
    }
}

export interface PostLocationRow {
    id: number;
    city: string;
    state: string;
    street_name: string;
    street_number: number;
    user_id: number;
}
