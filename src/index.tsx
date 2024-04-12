import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { create } from "./api/create/route";
import { users } from "./api/users/route";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hono × Supabase × Prisma</title>
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

const App: FC = () => {
  return (
    <Layout>
      <div class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 class="text-2xl font-semibold mb-4">ユーザー登録</h1>
        <form action="/create" method="post">
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              ユーザーネーム
            </label>
            <input
              name="username"
              type="text"
              placeholder="Input your name!!"
              required
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              登録
            </button>
          </div>
        </form>
        <a href="/users" class="block mt-4 text-blue-500 hover:underline">
          ユーザーリスト
        </a>
      </div>
    </Layout>
  );
};

app.route("/users", users);
app.route("/create", create);
app.get("/", (c) => {
  return c.html(<App />);
});

export default app;
