const { Router } = require('express')
const NaverController = require('../controllers/NaverController')

const router = Router()

router.get('/navers', NaverController.index)
router.get('/navers/:id', NaverController.show)
router.post('/navers', NaverController.store)

module.exports = router