import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const app = new Hono();
const prisma = new PrismaClient();

export const create = app.post("/", async (c) => {
  const formData = await c.req.formData();
  const username = String(formData.get("username"));

  try {
    const user = await prisma.user.create({
      data: {
        user_name: username,
      },
    });
    c.redirect("/users");
  } catch (error) {
    console.log("Error!");
  }
});
