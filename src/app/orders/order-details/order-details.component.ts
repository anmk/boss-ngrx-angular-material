import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { Order } from 'src/app/shared/models/order.model';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderComponent implements OnDestroy {
  
  @Input() order!: Order;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeDelivery = new EventEmitter<number>();
  @Output() changePayment = new EventEmitter<number>();

  private dialogService = inject(DialogService);
  private subscription!: Subscription;
  panelOpenState = false;

  deleteOrder(): void {
    this.subscription = this.dialogService.openConfirmDialog(`Are you sure you want to delete the order for the customer: ${this.order.customerName}?`)
    .afterClosed().subscribe(resp => {
      if(resp){
        this.delete.emit();
      }
    });
  }
  
  changeDeliveryStatus(): void {
    this.changeDelivery.emit(this.order.id);
  }

  changePaymentStatus(): void {
    this.changePayment.emit(this.order.id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
