const { DataTypes } = require('sequelize');
const sequelize = require("./../sequelize");

const Role = sequelize.define("role", {
    name: DataTypes.STRING,
    list: {
        type: DataTypes.STRING,
        get() {
            return JSON.parse(this.getDataValue('list'))
        },
        set(val) {
           this.setDataValue('list',JSON.stringify(val));
        },
        defaultValue: "[]"
    }
})

module.exports = Role;