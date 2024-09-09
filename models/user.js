const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            email:{
                type:Sequelize.STRING(40),
                allowNull:false,
                unique:true
            },
            nick:{
                type:Sequelize.STRING(40),
                allowNull:false
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'User',
            tableName:'users',
        })
    }
}