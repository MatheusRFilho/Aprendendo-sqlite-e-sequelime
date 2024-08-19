'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('cursos', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('categorias', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.removeColumn('matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.removeColumn('cursos', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.removeColumn('categorias', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  }
};