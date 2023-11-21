import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {

  @Input() orders: Order[] = [];
  @Output() delete = new EventEmitter();
  @Output() changeDelivery = new EventEmitter();
  @Output() changePayment = new EventEmitter();
  
  panelOpenState = false;

  deleteOrder(id: number): void {
    this.delete.emit(id);
	}

  changeDeliveryStatus(id: number): void {
    this.changeDelivery.emit(id);
	}

  changePaymentStatus(id: number): void {
    this.changePayment.emit(id);
	}

}
