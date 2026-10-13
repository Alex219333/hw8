import { Router } from "express";
import type { PostHandlers } from "../transport/handlers/post.js";

export const createPostRouter = (handlers: PostHandlers): Router => {
  const router = Router();

  router.get("/", handlers.getPosts);
  router.get("/:id", handlers.getPostById);
  router.post("/", handlers.createPost);
  router.put("/:id", handlers.updatePost);
  router.delete("/:id", handlers.deletePost);

  return router;
};
