const express = require('express');

const hbs = require('hbs');
const path = require('path');
const Product = require('./model/Product.model');


const app = express();
require('./db/ddbb-conection')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/products', (req, res) => {

    Product
        .find()
        .sort({ price: -1 })
        .then(allProducts => {
            res.render('product', { products: allProducts })
        })
        .catch(err => console.log(err))

});


app.listen(5005, () => console.log('🏃‍ on port 5005'));