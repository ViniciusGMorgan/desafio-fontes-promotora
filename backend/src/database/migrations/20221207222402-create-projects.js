module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      done: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      deadline: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.STRING,
        references: { model: "users", key: "username" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("clients");
  },
};
