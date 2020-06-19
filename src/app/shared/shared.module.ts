import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './table/header/header.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { SortHeaderComponent } from './table/sort-header/sort-header.component';
import { StickyHeaderDirective } from './directives/sticky-header.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AlertComponent } from './alert/alert.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    TableComponent,
    TableRowComponent,
    LoadingIndicatorComponent,
    SortHeaderComponent,
    StickyHeaderDirective,
    CheckboxComponent,
    HeaderComponent,
    AlertComponent,
    AlertsComponent
  ],
  exports:[
    TableComponent,
    LoadingIndicatorComponent,
    AlertComponent,
    AlertsComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
