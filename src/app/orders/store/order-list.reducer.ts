import { Action, createReducer, on } from "@ngrx/store";

import * as OrderListActions from './order-list.action'
import { OrderListState } from "src/app/shared/models/order-list-state.model";
import { SAMPLE_ORDERS } from "src/app/shared/models/sample-orders.model";

const initialState: OrderListState = {
  orders: SAMPLE_ORDERS
}

const _orderListReducer = createReducer(
  initialState,
  on(
    OrderListActions.addOrder,
    (state, action) => ({
      ...state,
      orders: state.orders.concat({...action.order})
    })
  ),
  on(
    OrderListActions.addComment,
    (state, action) => ({
      ...state,
      orders: state.orders.map(order => order.id === action.id ? {...order, comment: order.comment} : order)
    })
  ),
  on(
    OrderListActions.deleteOrder,
    (state, action) => ({
      ...state,
      orders: state.orders.filter(order => order.id !== action.id),
    }),
  ),
  on(
    OrderListActions.deleteAllOrder,
    (state) => ({
      ...state,
      orders: []
    }),
  ),
  on(
    OrderListActions.changeDeliveryStatus,
    (state, action) => ({
      ...state,
      orders: state.orders.map(order => order.id === action.id ? {...order, delivered: !order.delivered} : order)
    })
  ),
  on(
    OrderListActions.changePaymentStatus,
    (state, action) => ({
      ...state,
      orders: state.orders.map(order => order.id === action.id ? {...order, paid: !order.paid} : order)
    })
  ),
)

export function orderListReducer(state: OrderListState | undefined, action: Action) {
  return _orderListReducer(state, action);
}
