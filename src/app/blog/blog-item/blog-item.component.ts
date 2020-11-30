import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog/IBlog';
import { IBlogImage } from 'src/app/models/blog/IBlogImage';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  // recive from parent component
  @Input() blog!: IBlog;

  constructor() { }

  ngOnInit(): void {
    
  }

}
