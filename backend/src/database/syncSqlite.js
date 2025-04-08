const Product = require('../models/sql/Products');

async function syncSqlite() {
    try {
        await Product.sync({ alter: true });
        console.log('Tabela Product sincronizada com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar Product', error);
    }
}

syncSqlite();