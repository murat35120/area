const { DataTypes } = require('sequelize');
const sequelize = require("./../sequelize");

const Perk = sequelize.define("perk", {
    perk: DataTypes.STRING
})

module.exports = Perk;