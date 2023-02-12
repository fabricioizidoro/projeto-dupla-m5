const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('Users', {


    name: {
        type: DataTypes.STRING,
        requre: true
    },
    email: {
        type: DataTypes.STRING,
        requre: true
    },
    password: {
        type: DataTypes.STRING,
        requre: true
    },
})

module.exports = User