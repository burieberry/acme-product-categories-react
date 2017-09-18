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
    };
    this.onProductSave = this.onProductSave.bind(this);
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

  onProductSave(ev) {
    // console.log(ev)
    // axios.put(`/api/products/${ product.id }`, product)
    //   .then(result => axios.get('/api/products'))
    //   .then(result => this.setState({ name: result.data }))
  }

  render() {
    const { products, categories } = this.state;
    const { onProductSave } = this;

    return (
      <main className="container">
        <h1>ACME Product/Categories React</h1>
        <ProductList products={ products } categories={ categories } onProductSave={ onProductSave } />
        <ProductForm />
        <Summary />
      </main>
    )
  }
}

export default App;
