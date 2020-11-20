import { IBlogCategory } from './IBlogCategory';
import { IBlogComment } from './IBlogComment';
import { IBlogImage } from './IBlogImage';

export interface IBlog {
    title: string;
    description: string;
    body: string;
    id: number;
    display: boolean;
    displayDate: string;
    commentable: boolean;
    atTop: boolean;
    atTopEndDate: string;
    blogCategories: IBlogCategory[];
    addedDateTime: string;
    blogImages: IBlogImage[];
    commentsCount: number;
    blogComments: IBlogComment[];
    likesCount: number;
    dislikesCount: number;
}
