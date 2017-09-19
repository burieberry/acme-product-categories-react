/*
  TODO:
  - Update product info (Save button)
  - Delete product
  - Save button only active if there's change
*/

import React, { Component } from 'react';
import axios from 'axios';

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
                <div className="panel-body">
                  <form onSubmit={ onSave }>
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control" value={ product.name } />
                    </div>

                    <div className="form-group">
                      <label>Price</label>
                      <input className="form-control" value={ product.price } type="number" />
                    </div>

                    <div className="form-group">
                      <label>In Stock</label>
                      <input className="checkbox" checked={ product.inStock } type="checkbox" />
                    </div>

                    <div className="form-group">
                      <label>Category</label>
                      <select className="form-control" name="category" value={ product.category ? product.category.name : '--none--' } >
                        <option value={ null }>--none--</option>
                        {
                          categories.map(cat => {
                            return (
                              <option key={ cat.id } value={ cat.name }>
                                { cat.name }
                              </option>
                            )
                          })
                        }
                      </select>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Save</button>
                      <button className="btn btn-danger btn-block">Delete</button>
                    </div>
                  </form>
                </div>
              </div>
            )
          })
        }
      </section>
    )
  }
}

export default ProductList;
