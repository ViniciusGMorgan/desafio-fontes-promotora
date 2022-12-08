import { Router } from "express";

import authMiddleware from "./app/middlewares/auth";
import SessionController from "./app/controllers/SessionController";
import ProjectController from "./app/controllers/ProjectController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.use(authMiddleware);
routes.get("/users", UserController.index);

routes.get("/projects/:username", ProjectController.index);
routes.get("/project/:projectId", ProjectController.indexById);
routes.patch("/project/:projectId/done", ProjectController.patch);
routes.delete(
  "/projects/id/:projectId/username/:username",
  ProjectController.delete
);
routes.put("/projects", ProjectController.update);
routes.post("/projects", ProjectController.store);

export default routes;
