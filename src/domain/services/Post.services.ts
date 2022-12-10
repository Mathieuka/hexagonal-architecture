import { PostRepository } from "../repositories/Post";

export const postService = (repository: PostRepository): PostRepository => ({
  getPosts: () => repository.getPosts(),
  addPost: (newPost, posts) => {
    return repository.addPost(newPost, posts);
  },
  removePost: (id, posts) => repository.removePost(id, posts),
});
