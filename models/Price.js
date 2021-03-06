const { DataTypes } = require('sequelize');
const sequelize = require("./../sequelize");

const Price = sequelize.define("price", {
    domain: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.DATE,
    perk: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
})

module.exports = Price;