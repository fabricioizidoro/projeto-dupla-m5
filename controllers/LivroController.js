const Livro = require('../models/Livro')
const User = require('../models/User')

module.exports = class LivrosController {
    static async showLivros(req, res) {
        res.render('livros/home')
    }

    static async dashboard(req, res) {
        res.render('livros/dashboard')
    }
}