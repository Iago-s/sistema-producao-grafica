const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({
        message: 'Pong!'
    });
});

router.post('/products', ProductController.create);
router.get('/products', ProductController.list);
router.get('/products/:id', ProductController.getById);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

module.exports = router;