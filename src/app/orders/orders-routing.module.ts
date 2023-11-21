import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderBasicComponent } from './order-basic/order-basic.component';

const routes: Routes = [
  { path: 'order-list', component: OrderBasicComponent, pathMatch: 'full'},
];

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })
  
  export class OrdersRoutingModule {}