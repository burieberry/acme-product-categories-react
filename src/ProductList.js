/*
  TODO:
  - Update product info (Save button)
  - Delete product
  - Save button only active if there's change
*/

import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(ev) {
    this.setState({ product: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    this.props.onUpdate(this.state.product);
  }

  render() {
    const { products, categories } = this.props;
    const { onChange, onSave } = this;

    return (
      <section className="col-sm-6">
      {
        products.map(product => {
          return (
            <div className="col-sm-4 panel panel-default" key={ product.id }>
              <Form product={ product } {...this.props} { ...this } />
            </div>
          )
        })
      }
      </section>
    )
  }
}

export default ProductList;
