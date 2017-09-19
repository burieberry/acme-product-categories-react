import React from 'react';

const Summary = (props) => {
  const { products, categories } = props;

  const Categories = () => {
    let prodsNoCategory = [];
    products.map(product => {
      if (product.category === null) prodsNoCategory.push(product)
    });

    return (
      <ul>
        {
          categories.map(category => {
            return (
              <li key={ category.id }>
                { category.name } has <strong>{ category.products.length }</strong> products.
              </li>
            )
          })
        }
        <li>{ prodsNoCategory.length  } product(s) have no category.</li>
      </ul>
    );
  };

  const MostExpensive = () => {
    const product = products.reduce((memo, prod) => {
        if (prod.price >= memo.price) {
          memo = prod
        }
        return memo;
      }, { price: 0 });

    return (
      <span>Most expensive product is <strong>{ product.name }</strong> at { product.price }.</span>
    );
  };

  const Stock = () => {
    let prodsNotInStock = [];
    products.map(product => {
      if (!product.inStock) prodsNotInStock.push(product.name);
    });

    return (
      <span>Products not in stock are { prodsNotInStock.join(', ') }.</span>
    )
  }

  return (
    <section className="col-sm-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          Product Summary
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">There are <strong>{ products.length }</strong> products.</li>
            <li className="list-group-item">Categories: <Categories /></li>
            <li className="list-group-item"><MostExpensive /></li>
            <li className="list-group-item"><Stock /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;
