import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/blog/IBlog';
import { IPagination } from '../models/blog/IPagination';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Blog';
  blogs: IBlog[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Blog/GetBlogsList?PageSize=20&sort=titleDesc&PageIndex=3').subscribe(
      (response: any) => {
        this.blogs = response.data;
        console.log(response);
      }, error => {
          console.log(error);
      }
    );
  }

}
