/*
  TODO:
  - refactor product stats
  - add most expensive product name
  - handle null cases
*/

import React from 'react';

const Summary = (props) => {
  const { products, categories } = props;

  const noCategoryProductsCount = () => {
    var count = 0;
    products.map(product => {
      return product.category === null ? count++ : count;
    });
    return count;
  };

  const CategoryStatItem = ({ category }) => {
    return (
      <li key={ category.id }>
        { category.name } has <strong>{ category.products.length }</strong> products.
      </li>
    );
  };

  return (
    <section className="col-sm-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          Product Summary
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">There are <strong>{ products.length }</strong> products.</li>
            <li className="list-group-item">Categories:
              <ul>
                {
                  categories.map(category => {
                    return (
                      <CategoryStatItem key={ category.id } category={ category } />
                    )
                  })
                }
                <li>{ noCategoryProductsCount() } product(s) have no category.</li>
              </ul>
            </li>
            <li className="list-group-item">Most expensive product is <strong>TK</strong> at {
              products.reduce((memo, product) => {
                memo = Math.max(memo, product.price);
                return memo;
              }, 0)
            }.</li>
            <li className="list-group-item">Products not in stock are {
              products.map(product => {
                if (!product.inStock) {
                  return product.name;
                }
              }).join(' ')
            }.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;
