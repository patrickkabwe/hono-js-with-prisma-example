import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: ["info", "warn"],
  });
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient({
      log: ["info", "warn", "query"],
    });
  }
  prisma = global.__db__;
}

export { prisma };
