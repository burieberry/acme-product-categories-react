/*
  TODO:
  - Update product info (Save button)
  - Delete product
  - Save button only active if there's change
*/

import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { products, categories } = this.props;
    const { onNameChange, onPriceChange, onStockChange, onCategoryChange, onSave } = this;

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
                      <input className="form-control" value={ product.name } onChange={ onNameChange } />
                    </div>

                    <div className="form-group">
                      <label>Price</label>
                      <input className="form-control" value={ product.price } type="number" onChange={ onPriceChange } />
                    </div>

                    <div className="form-group">
                      <label>In Stock</label>
                      <input className="checkbox" type="checkbox" name="" checked={ product.inStock } onChange={ onStockChange } />
                    </div>

                    <div className="form-group">
                      <label>Category</label>
                      <select className="form-control" name="">
                        <option>{ product.category ? product.category.name : '--none--' }</option>
                        {
                          categories.map(cat => {
                            return (
                              <option key={ cat.id } onChange={ onCategoryChange }>
                                {
                                  product.category  && product.category.name === cat.name ?
                                  '--none--' : cat.name
                                }
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
