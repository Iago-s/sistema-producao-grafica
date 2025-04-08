const { DataTypes } = require('sequelize');
const sqlite = require('../../config/db.sqlite');

const Product = sqlite.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'products',
    timestamps: true,
});

module.exports = Product;