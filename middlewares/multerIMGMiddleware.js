const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let folder = path.join(__dirname, '../public/img/my_work')

        cb(null,folder)
    },
    filename: (req, file, cb) =>{
        const newFileName = Date.now() + path.extname(file.originalname)

        cb(null, newFileName)
    }
})

const upload = multer({storage})

module.exports = upload