const Sequelize = require("sequelize");
const sequel = require("../config/connections.js");

const Carlog = sequel.define("carlog",{
    carid :{type:Sequelize.UUID,
    defaultValue:Sequelize.UUIDV4,
allowNull:false,
primaryKey:true},
color:{type:Sequelize.STRING},
regNum:{type:Sequelize.STRING},

})

module.exports = Carlog