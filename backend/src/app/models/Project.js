import Sequelize, { Model } from "sequelize";
class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        title: Sequelize.STRING,
        zip_code: Sequelize.NUMBER,
        cost: Sequelize.NUMBER,
        done: Sequelize.BOOLEAN,
        deadline: Sequelize.DATE,
        username: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Project;
