import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";

describe("Post service", () => {
  test("Dummy", async () => {
    const posts = await postService(postRepository()).getPosts();
    expect(posts.length).toEqual(6);
  });
});
