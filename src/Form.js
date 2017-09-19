import React from 'react';

const Form = ({ product, categories, onChange, onSave, onDelete, name, price, inStock }) => {
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

        { product ? (
          <div className="form-group">
            <label>Category</label>
            <select className="form-control" id={ product.id } name="category" defaultValue={ product.category ? product.category.name : '--none--' }>
              <option value={ null }>--none--</option>
              {
                categories.map(cat => {
                  return (
                    <option key={ cat.id } value={ cat.name }>{ cat.name }</option>
                  )
                })
              }
            </select>
          </div>
        ) : (
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
          )
        }

          <button className="btn btn-primary btn-block">Save</button>
      </form>

      { product &&
        <form onSubmit={ onDelete } id={ product.id }>
          <button className="btn btn-danger btn-block">Delete</button>
        </form>
      }
    </div>
  );
};

export default Form;
