import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/blog/IBlog';
import { IBlogCategory } from '../models/blog/IBlogCategory';
import { IPagination } from '../models/blog/IPagination';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Blog';
  blogs: IBlog[] = [];
  category!: IBlogCategory[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.getBlog();
    this.getBlogCategories();

  }

  // tslint:disable-next-line: typedef
  getBlog() {
    this.blogService.getBlog().subscribe(
      response => {
        this.blogs = response.data;
        console.log(response);
      }, error => {
          console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  getBlogCategories() {
    this.blogService.getBlogCategories().subscribe(
      response => {
        this.category = response;
        console.log(response);
      }, error => {
          console.log(error);
      }
    );
  }

}
