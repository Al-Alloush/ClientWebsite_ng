import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlogCategory } from '../models/blog/IBlogCategory';
import { IPagination } from '../models/blog/IPagination';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getBlog(categoryId?: number, sort?: string, PageIndex?: number, pageSize?: number){
    // create a parameter object to pass up to our API endpoint as a query string
    let params = new HttpParams();
    if (PageIndex){
      params = params.append('pageIndex', PageIndex.toString());
    }
    if (pageSize){
      params = params.append('pageSize', pageSize.toString());
    }
    if (categoryId){
      params = params.append('categoryId', categoryId.toString());
    }
    if (sort){
      params = params.append('sort', sort);
    }

    /*
    observable back from the Https request.
    need manipulate this observable and project it into an IPagination object,
      for that get the body of the response and projects that into the IPagination object.
     */
    return this.http.get<IPagination>(this.baseUrl + 'Blog/GetBlogsList', {observe: 'response', params})
                                      /*
                                      pipe the response into something,
                                      is a wrapper around any are extra x operators that we want to use*/
                                      .pipe(
                                        /*inside this pipe we can chain as many our exchange operators as we want inside this request */
                                        // delay(1000),
                                        map( response => {
                                          return response.body;
                                        })
                                      );
  }

  // tslint:disable-next-line: typedef
  getBlogCategories(){
    return this.http.get<IBlogCategory[]>(this.baseUrl + 'BlogCategory/GetCategoriesList');
  }
}
