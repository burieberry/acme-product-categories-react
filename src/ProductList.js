/*
  TODO:
  - Delete product
  - Save button only active if there's change
*/

import React, { Component } from 'react';
import Form from './Form';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      id: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(ev) {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      id: ev.target.id,
      [name]: value
    });
  }

  onSave(ev) {
    console.log(this.state);
    ev.preventDefault();
    this.props.onUpdate(this.state);
  }

  onDelete(ev) {
    ev.preventDefault();
    this.setState({ id: ev.target.id })
    console.log(this.state)
    this.props.onDelete(this.state);
  }

  render() {
    const { products, categories } = this.props;
    const { onChange, onSave, onDelete } = this;

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
