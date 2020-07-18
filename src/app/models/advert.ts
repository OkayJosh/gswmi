export class Advert {
    count: number;
    next: string;
    previous: string;
    results: AdvertR;
}

class AdvertR {
    id: number;
    title: string;
    photo: File;
}