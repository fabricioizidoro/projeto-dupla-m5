const express =  require('express')
const router = express.Router()
const LivrosController = require('../controllers/LivroController')

const checkAuth = require('../helpers/auth').checkAuth

// controller
router.get('/dashboard', checkAuth, LivrosController.dashboard)
router.get('/', LivrosController.showLivros)

module.exports = router