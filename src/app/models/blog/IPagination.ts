import { IBlog } from './IBlog';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IBlog[];
}
