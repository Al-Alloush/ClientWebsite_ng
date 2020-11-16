import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../models/blog/IPagination';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getBlog(){
    return this.http.get<IPagination>(this.baseUrl + 'Blog/GetBlogsList?PageSize=20&sort=titleDesc&PageIndex=1');
  }
}
