import express from "express";
import { createPostRepository } from "./repositories/post.js";
import { createPostService } from "./services/post.js";
import { createPostHandlers } from "./transport/handlers/post.js";
import { createPostRouter } from "./routers/post.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// composition root: тут збираємо всі залежності
const postRepository = createPostRepository();
const postService = createPostService(postRepository);
const postHandlers = createPostHandlers(postService);
const postRouter = createPostRouter(postHandlers);

app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
