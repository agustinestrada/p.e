const express = require('express')
const app = express()
const session = require('express-session')
const mainRoutes = require('./routes/mainRoutes.js')
const adminRoutes = require('./routes/adminRoutes.js')
const port = process.env.PORT || 3003

app.use(session({
    secret:'Es Secreto!',
    resave:false,
    saveUninitialized:false
}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(port, ()=>{
    console.log('Esta vivooo')
})

app.use('/admin', adminRoutes)
app.use('/', mainRoutes)

