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

  imagesPath!: IBlogImage[];
  imgPath!: string ;

  constructor() { }

  ngOnInit(): void {

    this.imagesPath = this.blog.blogImages;
    // check if images array is empty
    if (this.imagesPath.length <= 0 ){
      // if empty add default image to avoid the error
      this.imgPath = '../../../assets/images/No_image_3x4.png';
    }else{
      // display the first image in array
      this.imgPath = this.imagesPath[0].imagePath;
    }
  }

}
