import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlogCategory } from '../models/blog/IBlogCategory';
import { IPagination } from '../models/blog/IPagination';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getBlog(){
    return this.http.get<IPagination>(this.baseUrl + 'Blog/GetBlogsList?PageSize=20&sort=titleDesc&PageIndex=0');
  }

  // tslint:disable-next-line: typedef
  getBlogCategories(){
    return this.http.get<IBlogCategory[]>(this.baseUrl + 'BlogCategory/GetCategoriesList');
  }
}
