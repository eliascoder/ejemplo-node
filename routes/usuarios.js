const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({status:200, response: "Hola mundo"})
});


module.exports = router