import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";

describe("Post service", () => {
  test("Get posts", async () => {
    const posts = await postService(postRepository()).getPosts();
    expect(posts.length).toEqual(6);
  });

  test("Add post", async () => {
    const response = await postService(postRepository()).getPosts();
    const newPost = {
      userId: 3,
      id: response.length,
      title: "Craft",
      body: "Hexagonal architecture",
    };
    const posts = postService(postRepository()).addPost(newPost, response);

    expect(posts[0]).toEqual(newPost);
    expect(posts.length).toEqual(7);
  });

  test("Remove post", async () => {
    const response = await postService(postRepository()).getPosts();
    const postId = 1;

    expect(response.find((post) => post.id === postId)).toBeTruthy();
    const posts = postService(postRepository()).removePost(postId, response);
    expect(posts.find((post) => post.id === postId)).toEqual(undefined);
  });
});
