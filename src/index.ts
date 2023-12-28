import { serve } from "@hono/node-server";
import { Hono } from "hono";
import {
  ServerContext,
  prismaMiddleware,
} from "./middleware/prisma-middleware";

const app = new Hono<ServerContext>();

// middleware
app.use("*", prismaMiddleware);

// routes
app.get("/", async (c) => {
  const values = await c.var.prisma.example.findMany();
  // const values = await c.get("prisma").prisma.example.findMany();
  return c.json(values);
});

// server
const server = serve(app);
server.listen(5000);
