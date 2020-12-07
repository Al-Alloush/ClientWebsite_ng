import { IBlog } from './IBlog';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    pagesCount: number;
    count: number;
    data: IBlog[];
}
