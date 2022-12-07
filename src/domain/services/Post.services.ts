import { PostRepository } from "../repositories/Post";

export const postService = (repository: PostRepository): PostRepository => ({
  getPosts: () => repository.getPosts(),
});
