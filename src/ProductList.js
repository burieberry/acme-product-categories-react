import React from 'react';

const ProductList = (props) => {
  const { products, categories } = props;

  return (
    <section className="col-sm-6">
      {
        products.map(product => {
          return (
            <div className="col-sm-4 panel panel-default" key={ product.id }>
              <div className="panel-body">
                <form onSubmit="">
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" value={ product.name } />
                  </div>

                  <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" value={ product.price } type="number"/>
                  </div>

                  <div className="form-group">
                    <label>In Stock</label>
                    <input className="checkbox" type="checkbox" name="" checked={ product.inStock } />
                  </div>

                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="">
                      <option>{ product.category ? product.category.name : '--none--' }</option>
                      {
                        categories.map(cat => {
                          return (
                            <option key={ cat.id }>
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
};

export default ProductList;
