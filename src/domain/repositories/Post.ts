import { Post } from "../models/Post";

export interface PostRepository {
  getPosts: () => Promise<Post[]>;
  createPost: (newPost: Post, posts: Post[]) => Post[];
  deletePost: (id: number, posts: Post[]) => Post[];
  updatePost: (
    id: number,
    params: { title?: string; body?: string },
    posts: Post[]
  ) => Post[];
}
