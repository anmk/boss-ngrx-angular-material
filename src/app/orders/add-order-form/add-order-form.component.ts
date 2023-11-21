import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomErrorStateMatcher } from 'src/app/custom-state-matcher';
import { DISHESS } from 'src/app/shared/models/dish.table.model';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent {
  
  @Output() addOrder = new EventEmitter<{}>();
  
  private formBuilder = inject(FormBuilder);

  orderForm!: FormGroup;
  customErrorStateMarcher = new CustomErrorStateMatcher();
  dishess = DISHESS;
  
  ngOnInit(): void {
    this.buildOrderForm();
  }

  private buildOrderForm() {
   return this.orderForm = this.formBuilder.group({
      customerName: ['', [Validators.required, Validators.maxLength(12)]],
      chooseDishes: [[], [Validators.required]],
      comment: [''],
    });
  }

  addNewOrder() {
    this.addOrder.emit(this.orderForm.value);
    this.orderForm.reset();
  }

}
