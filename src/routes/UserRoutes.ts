import { FastifyInstance, FastifyRequest } from "fastify";
import { UserController } from "@controllers/UserController";
import { ControllerContainer } from "@containers/ControllerContainer";
import { z } from "zod";
import { FastifyTypedInstance, IUser } from "@utils/types";

class UserRoutes {
  private readonly prefix = "/users";

  constructor(private readonly controller: UserController) {}

  async register(app: FastifyTypedInstance) {
    app.get(
      this.prefix,
      {
        schema: {
          tags: ["users"],
          description: "Get all users",
        },
      },
      (req, reply) => this.controller.getAllUsers(req, reply)
    );
    app.post(
      this.prefix,
      {
        schema: {
          tags: ["users"],
          description: "Create a new user",
          body: z.object({
            name: z.string(),
            email: z.string(),
            phoneNumber: z.string(),
          }),
        },
      },
      (request: FastifyRequest<{ Body: IUser }>, replay) =>
        this.controller.createUser(request, replay)
    );
  }
}

export const userRoutes = new UserRoutes(ControllerContainer.userController);
