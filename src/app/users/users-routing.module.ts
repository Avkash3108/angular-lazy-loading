import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: ':id', component: UserFormComponent,  data: {
    shouldDetach: true, // Route will be resused. See CustomResuseStrategy.
    title: null
} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
