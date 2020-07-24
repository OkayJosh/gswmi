import { Url } from 'url';

export class Ministry {
    count: number;
    next: string;
    previous: string;
    results: MinistryR;
}

class MinistryR {
    id: number;
    name: string;
    link: Url;
    vlink: Url;
    info: string;
    photo: Blob;
    summary: string;
}
