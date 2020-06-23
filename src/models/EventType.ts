/* istanbul ignore file */

export class EventType {
    id: number;
    eventType: string;

    static from(obj: EventTypeRow): EventType {
        const eventType = new EventType(
            obj.id,
            obj.event_type
        );
        return eventType;
    }

    constructor(id: number, eventType: string) {
        this.id = id;
        this.eventType = eventType;
    }
}

export interface EventTypeRow {
    id: number;
    event_type: string;
}

