import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SharedModule } from '../shared/shared.module';
import {PostService} from '../services/post.service'

@NgModule({
  declarations: [PostsComponent, PostFormComponent],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  providers: [PostService]
})
export class PostsModule { }
