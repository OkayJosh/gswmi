import { Category } from "./category";
import { Author } from "./author";

export class Article {
    id: number;
    title: string;
    featured_image: File;
    text: string;
    category: Category;
    summary: string;
    date: Date;
    author: Author;



}