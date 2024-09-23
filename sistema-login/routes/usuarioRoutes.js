const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para cadastrar um novo usuário
router.post('/cadastrar', usuarioController.cadastrarUsuario);

module.exports = router;