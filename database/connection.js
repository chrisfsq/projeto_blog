const { Sequelize } = require("sequelize");
const connection = new Sequelize('press_db', 'root', '01041993',{
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = connection;