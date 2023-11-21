import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

import { AddOrderFormComponent } from './add-order-form/add-order-form.component';
import { OrderBasicComponent } from './order-basic/order-basic.component';
import { OrderComponent } from './order-details/order-details.component';
import { MaterialModule } from '../material.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PipeModule } from '../shared/pipes/pipe.module';
import { DirectiveModule } from '../shared/directives/directive.module';

@NgModule({
  declarations: [
    AddOrderFormComponent,
    OrderBasicComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDividerModule,
    PipeModule,
    DirectiveModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrdersModule { }
