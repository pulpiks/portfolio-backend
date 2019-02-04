'use strict';
const at = (Sequelize) => ({
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: { 
      type: Sequelize.DATE,
    },
})

const id = (Sequelize: SequelizeStatic) => ({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     await queryInterface.createTable('feedback', {
      ...id(Sequelize),
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      msg: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ...at(Sequelize),
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.dropTable('feedback');
  }
};
