const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect('mongodb.//localhost:27017/sistema-producao', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conectado ao MongoDB com sucesso!');
    } catch(error){
        console.error('Erro ao conecta ao MongoDB', error);
    };
}

module.exports = connectMongo;