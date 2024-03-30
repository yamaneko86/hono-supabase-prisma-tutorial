import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const app = new Hono();

export const users = app.get("/", async (c) => {
  const prisma = new PrismaClient();
  const getUsers = await prisma.user.findMany();
  return c.json(getUsers);
});
