const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../public/descargables')

        cb(null, folder)
    },
    filename: (req, file, cb) => {
        const newFileName = 'Pablo de Estrada - Resume' + path.extname(file.originalname)

        cb(null, newFileName)
    }
})

const uploadPDF = multer({ storage })

module.exports = uploadPDF