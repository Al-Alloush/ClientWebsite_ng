import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  sotrtSelected = 'dateDesc';
  sortOptions = [
    {name: 'New', value : 'dateDesc'},
    {name: 'Old', value : 'dateAsc'},
    {name: 'Alphabetical (A-Z)', value : 'titleAsc'},
    {name: 'Alphabetical (Z-A)', value : 'titleDesc'}
  ];
  pageIndex = 1;
  pageSize = 10;
  totalBlogs = 0;
  totalPages = 1;
  @ViewChild('search') searchTerm!: ElementRef;
  search!: string;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.getBlog();
    this.getBlogCategories();

  }

  // tslint:disable-next-line: typedef
  getBlog() {
    this.blogService.getBlog(this.categoryIdSelected, this.sotrtSelected, this.pageIndex, this.pageSize, this.search ).subscribe(
      response => {
        // tslint:disable-next-line: no-non-null-assertion
        if (response != null){
          this.blogs = response.data;
          this.pageIndex = response.pageIndex;
          this.pageSize = response.pageSize;
          this.totalBlogs = response.count;
          this.totalPages = response.pagesCount;
        }else{
          this.blogs = [];
          // console.log(response);
        }
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

  // tslint:disable-next-line: typedef
  onSortSelected(sort: string){
    this.sotrtSelected = sort;
    this.getBlog();
  }

  onPageChange(event: any): void{
    this.pageIndex = event.page;
    this.getBlog();
  }

  onSearch(): any{
    this.search = this.searchTerm.nativeElement.value;
    // this.search = search;
    this.getBlog();
  }

  onResetSearch(): void{
    this.search = '';
    this.getBlog();
  }

}
