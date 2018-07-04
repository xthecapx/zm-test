import { Timestamp } from "rxjs";

export interface FeaturedPostModel {
  id?: string;
  description: string;
  disclaimer: string;
  dislikes: number;
  likes: number;
  question: string;
  title: string;
  closingDate: string;
  creationDate: string;
}
