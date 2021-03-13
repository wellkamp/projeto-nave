const { Router } = require('express')
const ProjectController = require('../controllers/ProjectController')

const router = Router()

router.get('/projects', ProjectController.index)
router.get('/projects/:id', ProjectController.show)
router.post('/projects', ProjectController.store)

module.exports = router