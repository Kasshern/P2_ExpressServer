export class SocialEvent {
    id: number;
    description: string;
    image: string;
    maxPeople: number;
    price: number;
    startTime: Date;
    title: string;
    eventTypeId: number;
    hostId: number;

    static from(obj: SocialEventRow): SocialEvent {
        const socialEvents = new SocialEvent(
            obj.id,
            obj.description,
            obj.image,
            obj.max_people,
            obj.price,
            new Date(obj.start_time),
            obj.title,
            obj.event_type_id,
            obj.host_id
        );
        return socialEvents;
    }

    constructor( id: number,
        description: string,
        image: string,
        maxPeople: number,
        price: number,
        startTime: Date,
        title: string,
        eventTypeId: number,
        hostId: number
    ) {
        this.id = id;
        this.description = description;
        this.image = image;
        this.maxPeople = maxPeople;
        this.price = price;
        this.startTime = startTime;
        this.title = title;
        this.eventTypeId = eventTypeId;
        this.hostId = hostId;
    }
}

export interface SocialEventRow {
    id: number;
    description: string;
    image: string;
    max_people: number;
    price: number;
    start_time: Date;
    title: string;
    event_type_id: number;
    host_id: number;
}
