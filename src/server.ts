import { fastify } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import { serverConfig } from "@config/ServerConfig";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(serverConfig);

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});
