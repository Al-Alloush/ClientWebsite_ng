import { IBlogCategory } from './IBlogCategory';
import { IBlogComment } from './IBlogComment';
import { IBlogImage } from './IBlogImage';

export interface IBlog {
    title_L2: string;
    description_L2: string;
    body_L2: string;
    title_L1: string;
    description_L1: string;
    body_L1: string;
    id: number;
    display: boolean;
    displayDate: string;
    commentable: boolean;
    atTop: boolean;
    blogCategoryId: number;
    blogCategory: IBlogCategory;
    addedDateTime: string;
    blogImages: IBlogImage[];
    commentsCount: number;
    blogComments: IBlogComment[];
    likesCount: number;
    dislikesCount: number;
}
