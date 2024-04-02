import { Hono } from "hono";
import { users } from "./api/users/route";

const app = new Hono();

app.route("/users", users);
