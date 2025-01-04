import { z } from "zod";
import { FastifyTypedInstance } from "./types.js";
import { randomUUID } from "node:crypto";

export function routes(app: FastifyTypedInstance) {
  app.get("/devices", (req, res) => {
    return [
      {
        id: 1,
        name: "Apple",
        type: "iPhone",
      },
      {
        id: 2,
        name: "iPhone",
        type: "iPhone",
      },
      {
        id: 3,
        name: "iPad",
        type: "iPad",
      },
    ];
  });

  app.post(
    "/devices",
    {
      schema: {
        tags: ["devices"],
        description: "Create a new device",
        body: z.object({
          name: z.string(),
          type: z.string(),
        }),
      },
    },
    (request, replay) => {
      const { name, type } = request.body;

      return replay.status(201).send();
    }
  );
}
