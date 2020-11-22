import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BlogComponent, BlogItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
