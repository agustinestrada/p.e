const adminMiddleware = (req, res, next) =>{
    
    if (req.session.adminLogeado == undefined || req.session.adminLogeado.estaLogeado == undefined){   
      
     return res.render('admin/logeo')
    }
    return next();   
}

module.exports = adminMiddleware