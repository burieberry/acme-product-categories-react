import React, { Component } from 'react';

class ProductList extends Component {
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

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   nextProps.products.map(product => {
  //     this.setState({
  //       name: product.name,
  //       price: product.price,
  //       inStock: product.inStock,
  //       category: product.category
  //     });
  //   })
  // }

  onNameChange(ev) {
    console.log(ev.target.value);
    this.setState({ name: ev.target.value });
  }

  onPriceChange(ev) {
    console.log(ev.target.value);
    this.setState({ price: ev.target.value });
  }

  onStockChange(ev) {
    console.log(ev.target.value);
    this.setState({ inStock: ev.target.value });
  }

  onCategoryChange(ev) {
    console.log(ev.target.value);
    this.setState({ category: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    // this.props.onProductSave(this.state);
  }

  render() {
    const { products, categories, name, price } = this.props;
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
