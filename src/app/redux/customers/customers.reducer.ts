import { createReducer, on } from '@ngrx/store';
import {
  addCustomer,
  loadCustomers,
  loadCustomersFailure,
  loadCustomersSuccess,
} from './customers.action';
import { initialCustomersState } from './customers.state';

export const customersReducer = createReducer(
  initialCustomersState,

  on(loadCustomers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadCustomersSuccess, (state, { customers }) => ({
    ...state,
    customers,
    loading: false,
    error: null,
  })),

  on(loadCustomersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(addCustomer, (state, { customer }) => ({
    ...state,
    customers: [...state.customers, customer],
  }))
);
