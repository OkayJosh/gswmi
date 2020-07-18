export class Publications {
    count: number;
    next: string;
    previous: string;
    results: PubR;
}

class PubR {
    id: number;
    photo: File;
    name: string;
    price: number;
    active: Boolean;
}