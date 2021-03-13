'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.Naver, {
        foreignKey: 'project_id',
        through: 'project_navers',
        as: 'navers'
      })
    }
  };
  Project.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo nome está vazio'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};