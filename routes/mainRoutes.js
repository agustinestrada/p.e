const express = require('express')
const mainRouter = express.Router()
const mainController = require('../controllers/mainController')

mainRouter.get('/', mainController.index)
mainRouter.get('/contact', mainController.contacto)
mainRouter.get('/works', mainController.trabajos)
mainRouter.get('/proyects', mainController.proyectos)
mainRouter.get('/about', mainController.about)
mainRouter.get('/mywork/:category', mainController.searchCategory)

mainRouter.post('/contactForm', mainController.contactForm)

module.exports = mainRouter