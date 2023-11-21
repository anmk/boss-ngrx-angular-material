import { createSelector } from "@ngrx/store";

import { AppState } from "../../store/app.reducer";
import { OrderListState } from "src/app/shared/models/order-list-state.model";

export const selectList = (state: AppState) => state.orders;

export const selectListOrders = createSelector(
  selectList,
  (state: OrderListState) => state.orders
)

export const selectListActiveOrders = createSelector(
  selectList,
  (state: OrderListState) => state.orders.filter(order => !order.delivered || !order.paid)
)