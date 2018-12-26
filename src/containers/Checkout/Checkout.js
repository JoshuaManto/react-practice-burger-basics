import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    // console.log(this.props);
    // Passing ingredients via QUERY PARAMS
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, price: price });
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
          // component={ContactData}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
