import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";

describe("Post service", () => {
  test("Get posts", async () => {
    const posts = await postService(postRepository()).getPosts();
    expect(posts.length).toEqual(6);
  });

  test("Add posts", async () => {
    const newPost = {
      id: 1,
      userId: 3,
      title: "Craft",
      body: "Hexagonal architecure",
    };
    const posts = postService(postRepository()).addPost(newPost, []);
    expect(posts[0]).toEqual(newPost);
    expect(posts.length).toEqual(1);
  });
});
