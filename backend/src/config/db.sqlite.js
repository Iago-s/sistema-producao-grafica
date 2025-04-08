const { Sequelize } = require('sequelize');
const path = require('path');

const dbPath = path.resolve(__dirname, '..', 'data', 'banco.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o SQLite estabelecida com sucesso.');
    } catch(error){
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();

module.exports = sequelize;