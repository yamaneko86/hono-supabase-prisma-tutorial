import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const app = new Hono();
const prisma = new PrismaClient();

export const create = app.post("/", async (c) => {
  const formData = await c.req.formData();
  const username = String(formData.get("username"));

  try {
    await prisma.user.create({
      data: {
        user_name: username,
      },
    });
  } catch (error) {
    console.log("Error!");
  }
  return c.redirect("/users");
});
