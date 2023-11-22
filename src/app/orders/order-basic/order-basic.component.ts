import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as OrderListActions from '../store/order-list.action';
import { selectListActiveOrders, selectListOrders } from "../store/order-list.selector";
import { Order } from '../../shared/models/order.model';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-order-basic',
  templateUrl: './order-basic.component.html',
  styleUrls: ['./order-basic.component.css']
})
export class OrderBasicComponent implements OnInit, OnDestroy {

  private mainSubscription!: Subscription; 
  private childSubscription!: Subscription;
  private secondChildSubscription!: Subscription;
  private store = inject(Store<AppState>);
  private dialogService = inject(DialogService);
  orders: Order[] = [];
  orderList = true;
  badgeHidden = false;

  private selectListOrders(): void {
    this.mainSubscription = this.store.select(selectListOrders).subscribe({
      next: (orders) => {
        this.orders = [...orders];
      }
    });
  }

  private selectListActiveOrders(): void {
    this.childSubscription = this.store.select(selectListActiveOrders).subscribe({
      next: (orders) => {
        this.orders = [...orders];
      }
    });
  }

  ngOnInit(): void {
    this.selectListOrders();
    this.mainSubscription.add(this.childSubscription);
    this.mainSubscription.add(this.secondChildSubscription);
  }

  toggleOrderList(): void {
    this.orderList = !this.orderList;
    return this.orderList ? this.selectListOrders() : this.selectListActiveOrders();
  }

  addOrder(order: any): void {
    const id = this.orders.length > 0 ? (this.orders[this.orders.length - 1].id + 1) : 1;
    this.store.dispatch(OrderListActions.addOrder({
      order: { 
        id, 
        customerName: order.customerName, 
        chooseDishes: order.chooseDishes, 
        delivered: false, 
        paid: false, 
        comment: order.comment
      }
    }));
  }

  deleteOrder(id: number): void {
    this.store.dispatch(OrderListActions.deleteOrder({id}));
  }

  deleteAllOrder(): void {
    this.secondChildSubscription = this.dialogService.openConfirmDialog('Are you sure to DELETE ALL ORDERS?')
    .afterClosed().subscribe(resp => {
      if(resp){
        this.store.dispatch(OrderListActions.deleteAllOrder());
      }
    });
  }

  changeDeliveryStatus(id: number): void {
    this.store.dispatch(OrderListActions.changeDeliveryStatus({id}));
  }

  changePaymentStatus(id: number): void {
    this.store.dispatch(OrderListActions.changePaymentStatus({id}));
  }

  toggleBadgeVisibility(): void {
    this.badgeHidden = !this.badgeHidden;
  }

  ngOnDestroy(): void {
    if (this.mainSubscription) {
      this.mainSubscription.unsubscribe();
    }
  }

}
