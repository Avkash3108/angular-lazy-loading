import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'add-post', component: PostFormComponent },
  { path: ':id', component: PostFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
