import { Article } from "./article";
import { Author } from "./author";

export class Comment {
    post: Article;
    user: Author;
    body: string;
    created_date: string;
    active: Boolean;

}