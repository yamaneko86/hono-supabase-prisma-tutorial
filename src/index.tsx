import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { create } from "./api/create/route";
import { users } from "./api/users/route";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html lang="ja">
      <body>{props.children}</body>
    </html>
  );
};

const App: FC = () => {
  return (
    <Layout>
      <h1>ユーザー登録</h1>
      <form action="/create" method="post">
        <div>
          <label htmlFor="username">ユーザーネーム</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="太郎"
            required
          />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </Layout>
  );
};

app.route("/users", users);
app.route("/create", create);
app.get("/", (c) => {
  return c.html(<App />);
});

export default app;
