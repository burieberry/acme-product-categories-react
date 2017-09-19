import React, { Component } from 'react';

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
          <div className="panel-heading">
            Product Form
          </div>
          <div className="panel-body">
            <form onSubmit={ onSave }>
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name" value={ name } onChange={ onChange } />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input className="form-control" name="price" value={ price } type="number" onChange={ onChange } />
              </div>

              <div className="form-group">
                <label>In Stock</label>
                <input className="checkbox" name="inStock" checked={ inStock } type="checkbox" onChange={ onChange } />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select className="form-control" name="categoryId" onChange={ onChange }>
                  <option>--none--</option>
                  {
                    categories.map(cat => {
                      return (
                        <option key={ cat.id } value={ cat.id }>{ cat.name }</option>
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
