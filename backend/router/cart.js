const express = require('express');
const handler = require('../shared/handler');
const cart = require('../shared/cart');

let router = express.Router();

router.get('/', (req, res) => {
    handler.readFile('./db/userCart.json', req, res);
});

router.post('/', (req, res) => {
    handler.modifyFile('./db/userCart.json', req, res, cart.add)
});

router.delete('/:id', (req, res) => {
    handler.modifyFile('./db/userCart.json', req, res, cart.remove)
});

router.delete('/:id/all', (req, res) => {
    handler.modifyFile('./db/userCart.json', req, res, cart.removeAll)
});

module.exports = router;
