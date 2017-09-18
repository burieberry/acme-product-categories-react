import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Summary from './Summary';

class App extends Component{
  constructor() {
    super();
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get('/api/products'),
      axios.get('/api/categories'),
    ])
    .then(([ products, categories ]) => {
      this.setState({
        products: products.data,
        categories: categories.data,
      });
    })
  }

  render() {
    const { products, categories } = this.state;

    return (
      <main className="container">
        <h1>ACME Product/Categories React</h1>
        <ProductList products={ products } categories={ categories } />
        <ProductForm />
        <Summary />
      </main>
    )
  }
}

export default App;
