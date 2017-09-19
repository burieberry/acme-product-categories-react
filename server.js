const express = require('express');
const path = require('path');
const app = express();
app.use(require('body-parser').json());

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db', { logging: false });

const Product = conn.define('product', {
  name: {
    type: conn.Sequelize.STRING,
    unique: true
  },
  price: {
    type: conn.Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  inStock: {
    type: conn.Sequelize.BOOLEAN,
    defaultValue: true
  }
}, {
  hooks: {
    beforeValidate: function(product) {
      if (product.categoryId === '') {
        product.categoryId = null;
      }
    }
  }
});

const Category = conn.define('category', {
  name: conn.Sequelize.STRING
});

Product.belongsTo(Category);
Category.hasMany(Product);

conn.sync({ force: true })
  .then(() => {
    return Promise.all([
      Product.create({ name: 'Foo', price: 10 }),
      Product.create({ name: 'Foo 2', price: 20 }),
      Product.create({ name: 'Bar', inStock: false }),
      Product.create({ name: 'Bazz', inStock: false }),
      Category.create({ name: 'Foo Category' }),
      Category.create({ name: 'Bar Category' }),
      Category.create({ name: 'Bazz Category' })
    ])
    .then(([ foo, foo2, bar, bazz, fooCategory, barCategory ]) => {
      return Promise.all([
        fooCategory.addProduct([ foo, foo2 ]),
        barCategory.addProduct([ bar ])
      ]);
    });
  });

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
  Product.findAll({
    order: [ 'id' ],
    include: Category
  })
  .then(products => res.send(products))
  .catch(next);
});

app.get('/api/categories', (req, res, next) => {
  Category.findAll({
    order: [ 'id' ],
    include: Product
  })
  .then(categories => res.send(categories))
  .catch(next);
});

app.put('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!req.body.categoryId) {
        req.body.categoryId = null;
      }
      Object.assign(product, req.body);
      return product.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.post('/api/products', (req, res, next) => {
  Product.create(req.body)
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.delete('/api/products/:id', (req, res, next) => {
  Product.destroy({ where: { id: req.params.id }})
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }.`));
