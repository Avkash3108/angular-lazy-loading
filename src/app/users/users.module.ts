import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component'
import { SharedModule } from '../shared/shared.module';
import {UserService} from '../services/user.service'

@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [UserService]
})
export class UsersModule { }
