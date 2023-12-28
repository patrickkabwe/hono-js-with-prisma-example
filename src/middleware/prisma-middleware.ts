import { Context, MiddlewareHandler } from "hono";
import { prisma } from "../lib/prisma";

type ServerVariables = {
  prisma: typeof prisma;
};

export type ServerContext = {
  Variables: ServerVariables;
} & Context;

export const prismaMiddleware: MiddlewareHandler<ServerContext> = async (
  ctx,
  next
) => {
  ctx.set("prisma", prisma);
  await next();
};
