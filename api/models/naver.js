'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Naver extends Model {
    static associate(models) {
      Naver.belongsToMany(models.Project, {
        foreignKey: 'naver_id',
        through: 'project_navers',
        as: 'projects'
      })
    }
  };
  Naver.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo nome está vazio'
        }
      }
    },
    job_role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo cargo está vazio'
        }
      }
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo data de nascimento está vazio'
        }
      }
    },
    admission_date: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Campo data de admissão está vazio'
        },
      }
    },
    
  }, {
    sequelize,
    modelName: 'Naver',
  });
  return Naver;
};