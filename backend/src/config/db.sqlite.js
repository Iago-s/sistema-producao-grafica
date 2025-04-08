const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '..', 'data', 'banco.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if(err){
        console.log('Erro ao conecta ao Sqlite:', err.message);
    } else {
        console.log('Conectado ao Sqlite!');
    }
})

module.exports = db;