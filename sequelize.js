const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize('area', 'murat', '3512086', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        dialectOptions: { collate: 'utf8_general_ci' }
    },
    logging:false
});
module.exports = sequelize;