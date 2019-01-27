import * as actionTypes from './actionTypes';
import order from '../../components/Order/Order';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        console.log(response.data);

        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        // console.log(response);
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
        // console.log(error);
      });
  };
};
