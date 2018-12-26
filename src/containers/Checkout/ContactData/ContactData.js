import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      // in real app, should calculate the price in server and not in frontend
      price: this.props.price,
      customer: {
        name: 'Joshua',
        address: {
          street: 'test street',
          zipcode: '1111',
          country: 'usa'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
        // console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false });
        // console.log(error);
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />

        <input
          className={styles.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />

        <input
          className={styles.Input}
          type="text"
          name="street"
          placeholder="Street"
        />

        <input
          className={styles.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
