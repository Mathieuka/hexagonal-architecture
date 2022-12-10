import { Http } from "@domain/repositories/Http";
import { PostRepository } from "@domain/repositories/Post";
import { PostDTO } from "@infrastructure/http/dto/postDTO";
import { httpAxios } from "@infrastructure/instances/httpAxios";

export const postRepository = () =>
  ((client: Http): PostRepository => ({
    getPosts: async () => {
      return await client.get<PostDTO>(
        "https://jsonplaceholder.typicode.com/posts"
      );
    },
    addPost: (newPost, posts) => [newPost, ...posts],
    removePost: (id, posts) => posts.filter((post) => post.id !== id),
  }))(httpAxios);
