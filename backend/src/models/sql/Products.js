const { DataTypes } = require('sequelize');
const sqlite = require('../../config/db.sqlite');

const Product = sqlite.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hasVariants: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'products',
    timestamps: true,
});

module.exports = Product;