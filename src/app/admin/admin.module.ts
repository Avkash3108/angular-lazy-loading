import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [AdminComponent, AdminHeaderComponent, AdminSidebarComponent],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
