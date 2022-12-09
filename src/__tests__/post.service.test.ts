import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";

describe("Post service", () => {
  test("Dummy", () => {
    const service = postService(postRepository());
    console.log("service", service);
    expect(1).toEqual(1);
  });
});
