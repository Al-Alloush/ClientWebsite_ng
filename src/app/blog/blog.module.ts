import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogItemComponent } from './blog-item/blog-item.component';



@NgModule({
  declarations: [BlogComponent, BlogItemComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
