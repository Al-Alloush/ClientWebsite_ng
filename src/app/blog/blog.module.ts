import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
