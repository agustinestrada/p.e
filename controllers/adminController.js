const path = require('path')
const fs = require('fs')
const adminModel = require('../models/admin')
const res = require('express/lib/response')
const { redirect } = require('express/lib/response')

const adminController = {
    login: (req,res)=>{
        res.render('admin/logeo')
    },
    logeo: (req, res)=>{
        const {admin, password} = req.body
        
        if(admin == 'estradaanimation@gmail.com' && password == '1234'){
            
            req.session.adminLogeado = {
                estaLogeado: true,
                email: 'estradaanimation@gmail.com',
                persona: 'Pablo de Estrada'
            }
        
            return res.redirect('/admin/panel')

        }
        
        const error = 'El usuario no es valido'

        return res.render('admin/logeo', {error})

    },
    panel: (req, res)=>{

        const works = adminModel.findAll()
        
        return res.render('admin/panel', { works })
    },
    logout: (req, res)=>{
        req.session.destroy()

        return res.redirect('/')
    },
    upload: (req, res) =>{
        return res.render('admin/adminWorks.ejs')
    },
    uploadWork: (req, res) => {
        const { title, category,description } = req.body
        const { filename } = req.file

        const newWork = {
            id: adminModel.generateId(),
            title,
            category,
            description,
            img:filename
        }

        adminModel.create(newWork);

        return res.redirect('/admin/panel')
    },
    resume: (req, res) => {
        return res.redirect('/admin/panel')
    },
    delete: (req, res) => {
        const { id } = (req.params)

        adminModel.destroy(id)

        return res.redirect('/admin/panel')
    }
}

module.exports = adminController