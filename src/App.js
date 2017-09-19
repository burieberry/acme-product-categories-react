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
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.updateProps = this.updateProps.bind(this);
  }

  componentDidMount() {
    return Promise.all([
        axios.get('/api/products'),
        axios.get('/api/categories')
      ])
      .then(([ products, categories ]) => {
        this.setState({
          products: products.data,
          categories: categories.data,
        });
      })
  }

  updateProps() {
    return Promise.all([
        axios.get('/api/products'),
        axios.get('/api/categories')
      ])
      .then(([ products, categories ]) => {
        this.setState({
          products: products.data,
          categories: categories.data,
        });
      })
  }

  onSave(product) {
    return axios.post('/api/products', product)
      .then(this.updateProps);
  }

  onUpdate(product) {
    return axios.put(`/api/products/${ product.id }`, product)
      .then(this.updateProps);
  }

  onDelete(product) {
    return axios.delete(`/api/products/${ product.id }`, product)
      .then(this.updateProps);
  }

  render() {
    const { products, categories } = this.state;
    const { onSave, onUpdate, onDelete } = this;

    return (
      <main className="container">
        <h1>ACME Product/Categories React</h1>
        <ProductList products={ products } categories={ categories } onUpdate={ onUpdate } onDelete={ onDelete }/>
        <ProductForm categories={ categories } onSave={ onSave } />
        <Summary products={ products } categories={ categories } />
      </main>
    )
  }
}

export default App;
