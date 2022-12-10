import { PostRepository } from "../repositories/Post";
import { Post } from "@domain/models/Post";

export const postService = (repository: PostRepository): PostRepository => ({
  getPosts: () => repository.getPosts(),
  addPost: (newPost: Post, posts: Post[]) => {
    return repository.addPost(newPost, posts);
  },
});
