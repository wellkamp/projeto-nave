const { ProjectsServices } = require('../services')
const projectServices = new ProjectsServices()

class ProjectController {
    static async index(req, res) {
        try {
            const getAllProjects = await projectServices.getAllProjects()
            return res.status(200).json(getAllProjects)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async store(req, res) {
        try {
          const { navers, ...data} = req.body

          const newProject = await projectServices.createRegister(data)

          if(navers !== undefined && navers.length > 0) {
            newProject.setNavers(navers)
          }

          return res.status(201).json(newProject)
        } catch (err) {
          return res.status(400).json(err.message)
        }
    }

    static async show(req, res) {
        const { id } = req.params
  
        try {
          const getProject = await projectServices.getProject(id)
          return res.status(200).json(getProject)
        } catch (err) {
          return res.status(404).json(err.message)
        }
      }
}


module.exports = ProjectController
