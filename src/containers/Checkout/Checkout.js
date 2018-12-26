import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    // console.log(this.props);
    // Passing ingredients via QUERY PARAMS
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad', '1']
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log(this.props);
  //   // Passing ingredients via QUERY PARAMS
  //   const query = new URLSearchParams(props.location.search);
  //   const ingredients = {};
  //   for (let param of query.entries()) {
  //     // ['salad', '1']
  //     ingredients[param[0]] = +param[1];
  //   }
  //   state = { ingredients: ingredients };
  // }

  checkoutCancelHander = () => {
    this.props.history.goBack();
  };

  checkoutContinueHander = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.checkoutCancelHander}
          onCheckoutContinue={this.checkoutContinueHander}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
