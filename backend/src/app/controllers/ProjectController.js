import * as Yup from "yup";

import Project from "../models/Project";
import CepController from "./CepController";

class ProjectController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const projects = await Project.findAll({
      where: {
        username: req.params.username,
      },
      attributes: ["id", "title", "zip_code", "done", "cost", "deadline"],
      limit: 20,
      offset: (page - 1) * 20,
    });
    return res.json(projects);
  }

  async indexById(req, res) {
    const { dataValues } = await Project.findByPk(req.params.projectId);
    const infoCep = await CepController.show(dataValues.zip_code);
    const project = {
      ...dataValues,
      city: infoCep?.city,
      state: infoCep?.state,
    };

    return res.json(project);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      zip_code: Yup.number().required(),
      cost: Yup.number().required(),
      deadline: Yup.date().required(),
      username: Yup.string().required(),
      done: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Verifique os campos enviados" });
    }

    const { id, title, zip_code, cost, deadline, username, done } =
      await Project.create(req.body);

    return res.json({ id, title, zip_code, cost, deadline, done });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      zip_code: Yup.number().required(),
      cost: Yup.number().required(),
      deadline: Yup.date().required(),
      username: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Verifique os campos enviados" });
    }

    const project = await Project.findByPk(req.body.id);
    if (project.username === req.body.username) {
      const { id, title, zip_code, cost, deadline } = await project.update(
        req.body
      );
      return res.json({ id, title, zip_code, cost, deadline });
    } else {
      return res.status(400).json({
        error: "Você não pode alterar esse projeto, pois não é do seu usuário",
      });
    }
  }

  async patch(req, res) {
    const project = await Project.findByPk(req.params.projectId);
    await project.update({ done: true });
    return res.json("Projeto marcado para concluído!");
  }

  async delete(req, res) {
    const project = await Project.findByPk(req.params.projectId);
    if (project.username === req.params.username) {
      await project.destroy();
      return res.json({ message: "Deletado com sucesso" });
    } else {
      return res.status(400).json({
        error: "Você não pode excluir esse projeto, pois não é do seu usuário",
      });
    }
  }
}

export default new ProjectController();
