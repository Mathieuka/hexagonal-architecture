import { PostRepository } from "../repositories/Post";

export const postService = (repository: PostRepository): PostRepository => ({
  getPosts: () => repository.getPosts(),
  createPost: (newPost, posts) => {
    return repository.createPost(newPost, posts);
  },
  removePost: (id, posts) => repository.removePost(id, posts),
  updatePost: (id, newPost, posts) => repository.updatePost(id, newPost, posts),
});
