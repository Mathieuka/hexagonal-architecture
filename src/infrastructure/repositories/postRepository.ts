import { Http } from "../../domain/repositories/Http";
import { PostRepository } from "../../domain/repositories/Post";
import { PostDTO } from "../http/dto/postDTO";

export const postRepository = (client: Http): PostRepository => ({
  getPosts: async () => {
    return await client.get<PostDTO>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  },
});
