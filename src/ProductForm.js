/*
  TODO:
    - refactor onChange events into single function
    - set & clear Category
*/

import React, { Component } from 'react';

class ProductForm extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      inStock: false,
      category: {}
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onNameChange(ev) {
    this.setState({ name: ev.target.value });
  }

  onPriceChange(ev) {
    this.setState({ price: ev.target.value });
  }

  onStockChange(ev) {
    this.setState({ inStock: ev.target.value });
  }

  onCategoryChange(ev) {
    this.setState({ category: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    this.props.onSave(this.state)
      .then(() => { this.setState({
          name: '',
          price: 0,
          inStock: false,
          category: {}
        })
      })
  }

  render() {
    const { categories } = this.props;
    const { name, price, inStock, category, value } = this.state;
    const { onNameChange, onPriceChange, onStockChange, onCategoryChange, onSave } = this;

    return (
      <section className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            Product Form
          </div>
          <div className="panel-body">
            <form onSubmit={ onSave }>
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" value={ name } onChange={ onNameChange } />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input className="form-control" value={ price } type="number" onChange={ onPriceChange } />
              </div>

              <div className="form-group">
                <label>In Stock</label>
                <input className="checkbox" type="checkbox" checked={ inStock } onChange={ onStockChange } />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select className="form-control" value={ category } onChange={ onCategoryChange }>
                  <option>--none--</option>
                  {
                    categories.map(cat => {
                      return (
                        <option key={ cat.id } value={ cat.name }>{ cat.name }</option>
                      )
                    })
                  }
                </select>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductForm;
