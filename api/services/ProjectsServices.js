const db = require('../models')
const Services = require('./Services')

class ProjectsServices extends Services {
    constructor() {
        super('Project')
    }

    async getAllProjects() {
        return db[this.modelName].findAll({
            attributes: ['id','name']
        })
    }

    async getProject(id) {
        const findProject = await db[this.modelName].findOne({
            where: {
              id: id
            }
        })
  
        if(!findProject) {
        throw new Error('Projeto não encontrado')
        }


        return db[this.modelName].findByPk(id, {
            attributes: ['id','name'],
            include: { 
              association: 'navers',
              attributes: ['id', "name", "birthdate", "admission_date", "job_role"],
              through: {
              attributes: []
              }
            }
          })
    }
}

module.exports = ProjectsServices