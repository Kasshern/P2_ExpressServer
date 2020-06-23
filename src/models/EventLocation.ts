/* istanbul ignore file */
export class EventLocation {
    id: number;
    city: string;
    state: string;
    streetName: string;
    streetNumber: number;
    userId: number;

    static from(obj: EventLocationRow): EventLocation {
        const eventLocation = new EventLocation(
            obj.id,
            obj.city,
            obj.state,
            obj.street_name,
            obj.street_number,
            obj.user_id
        );
        return eventLocation;
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

export interface EventLocationRow {
    id: number;
    city: string;
    state: string;
    street_name: string;
    street_number: number;
    user_id: number;
}
