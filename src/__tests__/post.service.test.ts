import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";

describe("Post service", () => {
  test("Dummy", async () => {
    const result = await postService(postRepository()).getPosts();

    console.log("result", result);

    // expect(result).toEqual(1);
  });
});
