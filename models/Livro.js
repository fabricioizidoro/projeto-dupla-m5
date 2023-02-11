const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

// User

const Livro = db.define('Livros', {


    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    
})

Livro.belongsTo(User)
User.hasMany(Livro)

module.exports = Livro