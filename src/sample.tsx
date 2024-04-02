import { Hono } from "hono";
import type { FC } from "hono/jsx";
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
      <form action="/api/create" method="post">
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
          <button type="submit">ログイン</button>
        </div>
      </form>
    </Layout>
  );
};

app.route("/users", users);
app.get("/", (c) => {
  return c.html(<App />);
});
