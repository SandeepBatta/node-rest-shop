const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .select('name price _id')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/products/" + doc._id
                    }
                };
            })
        };
        // if (docs.length >= 0) {
            res.status(200).json(response);
        // } else {
        //     res.status(404).json({
        //         message: "No entries found"
        //     });
        // }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created Product Successfully',
            createdProduct: {
                name: result.name,
                price: result.price,
                _id: result._id,
                request: {
                    type: "GET",
                    url: "http://localhost:3000/products/" + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.findById(id)
    .select('name price _id')
    .exec()
    .then(doc => {
        if (doc) {
            res.status(200).json({
                product: doc,
                request: {
                    type: {
                        type: "GET",
                        description: "Get all products",
                        url: "http://localhost:3000/products/"
                    }
                }
            });
        }
        else {
            console.log('No Valid Entry');
            res.status(404).json({
                message: 'No Valid entry found for provided ID'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Product Updated",
            request: {
                type: "GET",
                url: "http://localhost:3000/products/" + id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Product Deleted",
            request: {
                type: "POST",
                url: "http://localhost:3000/products/"
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});

module.exports = router;