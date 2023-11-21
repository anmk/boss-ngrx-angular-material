import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/shared/models/order.model";

export const addOrder = createAction(
  '[Order List] Add Order',
  props<{order: Order}>(),
)

export const addComment = createAction(
  '[Order List] Add Comment',
  props<{id: number}>()
)

export const deleteOrder = createAction(
  '[Order List] Delete Order',
  props<{id: number}>()
)

export const deleteAllOrder = createAction(
  '[Order List] Delete All Order'
)

export const changeDeliveryStatus = createAction(
  '[Order List] Change Status Delivery',
  props<{id: number}>()
)

export const changePaymentStatus = createAction(
  '[Order List] Change Status Payment',
  props<{id: number}>()
)

