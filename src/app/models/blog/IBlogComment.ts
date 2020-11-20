export interface IBlogComment {
    id: number;
    comment: string;
    blogId: number;
    userId: string;
    likesCount: number;
    dislikesCount: number;
}
