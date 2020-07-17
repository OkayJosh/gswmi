export class Contact {
    name: string;
    results: ContactR;
}

class ContactR {
    id: number;
    fullname: string;
    phonenumber: number;
    address: string;
    message: string;
    created_date: Date
}