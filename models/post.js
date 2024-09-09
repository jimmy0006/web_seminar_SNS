const Sequelize = require('sequelize')

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            content:{
                type:Sequelize.STRING(200),
                allowNull:false
            },
            img:{
                type:Sequelize.STRING(200),
                allowNull:true
            },
            writer:{
                type:Sequelize.INTEGER,
                allowNull:false
            }
        },{
            sequelize,
            timestamps:true,
            modelName:'Post',
            tableName:'posts',
        })
    }
}