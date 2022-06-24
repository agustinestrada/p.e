const nodemailer = require('nodemailer')
const worksModel = require('../models/admin')
const path = require('path')
const fs = require('fs')

const mainController = {
    index: (req, res)=>{
        res.render('index')
    },
    contacto: (req, res)=>{
        res.render('main/contact')
    },
    trabajos: (req, res)=>{
        res.render('main/myWork')
    },
    proyectos: (req, res)=>{
        res.render('main/upcomingProyects')
    },
    about: (req, res)=>{
        res.render('main/aboutMe')
    },
    contactForm: (req, res)=>{

        console.log(req.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'estradaanimation@gmail.com',
                pass: 'IamCatriel10!'
            }
        })

        const mailOptions = {
            from: req.body.email,
            to: 'estradaanimation@gmail.com',
            subject: `WEB - Message from ${req.body.email}: ${req.body.subject}`,
            text: req.body.comment
        }

        transporter.sendMail(mailOptions, (error, info)=>{
            if (error) {
                console.log(error);
                res.send('error')
            }else{
                console.log('Email sent: ' + info.response);
                res.send('success')
            }
        })
       // res.redirect('/')

    },
    searchCategory: (req, res) => {
        const { category } = req.params
        const trabajos = worksModel.findByCategory(category)
        res.render('main/categoryWork', {trabajos})
    },
    deleteWork: () => {

    }
}

module.exports = mainController

