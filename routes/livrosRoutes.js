const express =  require('express')
const router = express.Router()
const LivrosController = require('../controllers/LivroController')
// controller

router.get('/', LivrosController.showLivros)

module.exports = router