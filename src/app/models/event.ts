import { Url } from 'url';

export class Event {
    count: number;
    next: string;
    previous: string;
    results: EventR;
}

class EventR {
    id: number;
    name: string;
    link: Url;
    vlink: Url;
    info: string;
    photo: Blob;
    summary: string;
}
