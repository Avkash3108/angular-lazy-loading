import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
