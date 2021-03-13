const db = require('../models')
const { NaversServices } = require('../services')
const naversServices = new NaversServices()


class NaverController {
    static async index(req, res) {
        try {
            const getAllNavers = await naversServices.getAllNavers({
              attributes: ['id','name', 'birthdate', 'admission_date', 'job_role']
            })
            return res.status(200).json(getAllNavers)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }


    static async store(req, res) {
        try {
          const { projects, ...data} = req.body
          const newNaver = await naversServices.createRegister(data)
          
          newNaver.setProjects(projects)
          return res.status(201).json(newNaver)
        } catch (err) {
          return res.status(400).json(err.message)
        }
    }

    static async show(req, res) {
      const { id } = req.params
      
      console.log(id)
      if (!id) {
        throw new Error('Naver não encontrado')
      }

      try {
        const getNaver = await naversServices.getNaver(id)
        return res.status(200).json(getNaver)
      } catch (err) {
        return res.status(404).json(err.message)
      }
    }
}


module.exports = NaverController
