import { FastifyInstance } from "fastify";
import { userRoutes } from "./UserRoutes";
import { FastifyTypedInstance } from "@utils/types";

export const registerRoutes = (app: FastifyTypedInstance) => {
  userRoutes.register(app);
};
