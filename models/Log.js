const { DataTypes } = require('sequelize');
const sequelize = require("./../sequelize");

const Log = sequelize.define("log", {
    domain: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    employee: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    bill: {
        type: DataTypes.STRING,
        get() {
            return JSON.parse(this.getDataValue('domains'))
        },
        set(val) {
           this.setDataValue('domains',JSON.stringify(val));
        },
        defaultValue: "{}"
    }
})

module.exports = Log;