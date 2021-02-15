const {Router} = require('express');
const router = Router();
const service = require('../services/usuarios_service')
router.get('/', (req, res) => {
    resultado = service.listar()
    res.status(resultado.status).json({status: resultado.status, response: resultado.response})
});


module.exports = router
