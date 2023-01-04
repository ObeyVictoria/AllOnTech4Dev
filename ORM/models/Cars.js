const Sequelize = require("sequelize");
const sequel = require("../config/connections.js");

const Cars = sequel.define("cars",{
    carid:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    carModel:{
        type: Sequelize.STRING,
        allowNull: false
    },
    carMake:{
        type: Sequelize.STRING,
        allowNull: false
    },
    carYear:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


module.exports = Cars