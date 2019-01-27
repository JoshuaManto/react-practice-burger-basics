import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   price: 0
  // };

  // componentWillMount() {
  //   // console.log(this.props);
  //   // Passing ingredients via QUERY PARAMS
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     // ['salad', '1']
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients: ingredients, price: price });
  // }

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

  // componentWillMount() {
  //   this.props.onInitPurchase();
  // }

  checkoutCancelHander = () => {
    this.props.history.goBack();
  };

  checkoutContinueHander = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            onCheckoutCancelled={this.checkoutCancelHander}
            onCheckoutContinue={this.checkoutContinueHander}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            // component={ContactData}
            // render={props => (
            //   <ContactData
            //     ingredients={this.state.ingredients}
            //     price={this.state.price}
            //     {...props}

            component={ContactData}
          />
        </div>
      );
    }
    return summary;
    // return (
    // <div>
    /* <CheckoutSummary
          ingredients={this.props.ings}
          onCheckoutCancelled={this.checkoutCancelHander}
          onCheckoutContinue={this.checkoutContinueHander}
        /> */
    /* <Route
          path={this.props.match.path + '/contact-data'}
          // component={ContactData}
          // render={props => (
          //   <ContactData
          //     ingredients={this.state.ingredients}
          //     price={this.state.price}
          //     {...props}

          component={ContactData}
        /> */
    // </div>
    // );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onInitPurchase: () => dispatch(actions.purchaseInit())
//   };
// };
export default connect(mapStateToProps)(Checkout);
