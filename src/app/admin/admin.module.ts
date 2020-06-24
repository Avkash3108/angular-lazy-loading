import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
