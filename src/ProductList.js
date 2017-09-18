import React from 'react';

const ProductList = () => {
  return (
    <section className="col-sm-6" style={{ padding: 0 }}>
      <div className="col-sm-4 panel panel-default">
        <div className="panel-body">
          <form onSubmit="">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" value="" />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input className="form-control" value="" type="number"/>
            </div>

            <div className="form-group">
              <label>In Stock</label>
              <input className="checkbox" type="checkbox" name="" value="" />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-control" name="">
                <option value="">TK</option>
              </select>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">Save</button>
              <button className="btn btn-danger btn-block">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
};

export default ProductList;
