import React, { Component } from 'react';
import Form from './Form';

class ProductForm extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      inStock: false,
      categoryId: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(ev) {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSave(ev) {
    ev.preventDefault();
    this.props.onSave(this.state)
      .then(() => { this.setState({
          name: '',
          price: 0,
          inStock: false,
          categoryId: null
        })
      })
  }

  render() {
    const { categories } = this.props;
    const { name, price, inStock, categoryId } = this.state;
    const { onChange, onSave } = this;

    return (
      <section className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Product Form</div>
            <Form  { ...this.state } { ...this.props } { ...this } />
          </div>
      </section>
    )
  }
}

export default ProductForm;
