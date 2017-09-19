import React from 'react';

const Form = ({ product, categories, onChange, onSave, onDelete, name, price, inStock, categoryId }) => {
  return (
    <div className="panel-body">
      <form onSubmit={ onSave }>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" defaultValue={ product && product.name } id={ product && product.id } name="name" value={ name } onChange={ onChange } />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input className="form-control" defaultValue={ product && product.price } id={ product && product.id } name="price" value={ price } type="number" onChange={ onChange } />
        </div>

        <div className="form-group">
          <label>In Stock</label>
          <input className="checkbox" defaultChecked={ product && product.inStock } id={ product && product.id } name="inStock" checked={ inStock } type="checkbox" onChange={ onChange } />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select className="form-control" defaultValue={ product && product.category ? product.category.id : null } id={ product && product.id } name="categoryId" onChange={ onChange }>
            <option value={''}>--none--</option>
            {
              categories.map(cat => {
                return (
                  <option key={ cat.id } value={ cat.id }>{ cat.name }</option>
                )
              })
            }
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">Save</button>
        </div>
      </form>

      <div className="form-group">
        { product &&
          <form onSubmit={ onDelete } id={ product.id }>
            <button className="btn btn-danger btn-block">Delete</button>
          </form>
        }
      </div>
    </div>
  );
};

export default Form;
