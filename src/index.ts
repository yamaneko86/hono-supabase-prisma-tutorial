import { Hono } from "hono";
import { users } from "./api/user/route";

const app = new Hono();

app.route("/users", users);

export default app;
