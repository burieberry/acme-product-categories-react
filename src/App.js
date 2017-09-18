import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Summary from './Summary';

const App  = () => {
  return (
    <main className="container">
      <h1>ACME Product/Categories React</h1>
      <ProductList />
      <ProductForm />
      <Summary />
    </main>
  )
};

export default App;
