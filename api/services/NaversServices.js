const db = require('../models')
const Services = require('./Services')

class NaversServices extends Services {
    constructor() {
        super('Naver')
    }

    async getAllNavers() {
        return db[this.modelName].findAll({
            attributes: ['id','name', 'birthdate', 'admission_date', 'job_role']
        })
    }

    async getNaver(id) {
        const findNaver = await db[this.modelName].findOne({
          where: {
            id: id
          }
        })

        if(!findNaver) {
          throw new Error('Naver não encontrado')
        }

        return db[this.modelName].findByPk(id, {
            attributes: ['id', "name", "birthdate", "admission_date", "job_role"],
            include: { 
              association: 'projects',
              attributes: ['id', 'name'],
              through: {
                attributes: []
              }
            }
          })
    }
}

module.exports = NaversServices