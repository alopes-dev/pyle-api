import fastifyCors from "@fastify/cors";
import { FastifyTypedInstance } from "./types.js";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { routes } from "./routes.js";

export const serverConfig = (app: FastifyTypedInstance) => {
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(fastifyCors, {
    origin: "*",
  });

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Pyle API",
        description: "Pyle API",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUi, { routePrefix: "/docs" });

  app.register(routes);
};
