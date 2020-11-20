import { Component, OnInit } from '@angular/core';
import { IBlog } from '../models/blog/IBlog';
import { IBlogCategory } from '../models/blog/IBlogCategory';
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
  categoryIdSelected = 0;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.getBlog();
    this.getBlogCategories();

  }

  // tslint:disable-next-line: typedef
  getBlog() {
    this.blogService.getBlog(this.categoryIdSelected).subscribe(
      response => {
        // tslint:disable-next-line: no-non-null-assertion
        this.blogs = response!.data;
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
        this.category = [{id: 0, name: 'All'}, ...response];
        console.log(response);
      }, error => {
          console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  onCategorySelected(categoryId: number){
    this.categoryIdSelected = categoryId;
    this.getBlog();
  }

}
