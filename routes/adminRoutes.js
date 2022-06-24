const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/adminController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const uploadPDF = require('../middlewares/multerPDFMiddleware')
const upload = require('../middlewares/multerIMGMiddleware')


adminRouter.get('/', adminController.login)
adminRouter.post('/', adminController.logeo)

adminRouter.get('/panel', adminMiddleware, adminController.panel)
adminRouter.get('/logout', adminController.logout)
adminRouter.get('/mywork', adminMiddleware, adminController.upload)
adminRouter.post('/mywork', upload.single('img'), adminController.uploadWork)
adminRouter.post('/resume', uploadPDF.single('resume'), adminController.resume)
adminRouter.get('/delete/:id', adminController.delete)






module.exports = adminRouter

