const path = require('path')
const fs = require('fs')
const req = require('express/lib/request')

const admin = {
    
    fileName: './data/worksModel.json',

    generateId: () => {
        const allWorks = admin.findAll()
        const lastWork = allWorks.pop()
        
        if (allWorks != undefined && lastWork != undefined && lastWork.id) {
            return lastWork.id + 1            
        } else {
            return 1
        }
    },
    findAll: () => {
        const data = JSON.parse(fs.readFileSync(admin.fileName, 'utf-8')) 
        return data
    },
    findByPk: (id)=>{
        const work = admin.findAll()
        let workFound = work.find(trabajo => trabajo.id == id)
        return workFound
    },
    findByCategory: (category)=>{
        const allCategories = admin.findAll()
        let categori = allCategories.filter(categoria => categoria.category == category)
        return categori
    },
    create: (userData)=>{
       let allWorks = admin.findAll()
       allWorks.push(userData)
       const allWorksJSON = JSON.stringify(allWorks,null,' ')
       fs.writeFileSync(admin.fileName,allWorksJSON )
    },
    destroy: (id) => {
        const allWorks = admin.findAll()

        const allWorksFiltered = allWorks.filter( work => {
            return work.id != id
        })

        const allWorksFilteredJSON = JSON.stringify(allWorksFiltered, null, ' ')

        fs.writeFileSync(admin.fileName,allWorksFilteredJSON)

        return 
    }
    
}


module.exports = admin