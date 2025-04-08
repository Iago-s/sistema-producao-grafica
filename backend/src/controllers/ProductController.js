const Product = require('../models/sql/Products');

const ProductController = {
    async create(req, res) {
        try {
            const { name, hasVariants, variant } = req.body;

            const newProduct = await Product.create({
                name,
                hasVariants, 
                variant
            });

            return res.status(201).json(newProduct);
        } catch (error) {
            console.error('Erro ao criar produto?', error);
            return res.status(500),json({message: 'Erro ao criar produto'});
        }
    },

    async list(req, res) {
        try {
            const products = await Product.findAll();

            return res.status(200).json(products);
        } catch (error) {
            console.error('Erro ao listar produtos:', error);

            return res.status(500),json({ message: 'Erro ao listar produtos' });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);

            if(!product){
                return res.status(404).json({message: 'Produto não encontrado.'});
            }

            return res.status(200).json(product);
        } catch (error) { 
            console.error('Erro ao buscar produto:', error);

            return res.status(500).json({ message: 'Erro ao buscar produto.' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, hasVariants, variant } = req.body;

            const product = await Product.findByPk(id);
            if(!product){
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            await product.update({ name, hasVariants, variant });

            return res.status(200).json(product);
        } catch (error){
            console.error('Erro ao atualizar o produto:', error);
            return res.status(500).json({ message: 'Erro ao atualizar o produto.' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);

            if(!product){
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            await product.destroy();

            return res.status(204).send();
        } catch(error) {
            console.error('Erro ao deletar produto:', error);

            return res.status(500).json({ message: 'Erro ao deletar produto.' });
        }
    }
};

module.exports = ProductController;