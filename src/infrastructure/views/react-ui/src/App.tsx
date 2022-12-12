import React, { useEffect, useState } from "react";
import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";
import "./App.css";
import { Post } from "@domain/models/Post";
import { PostForm } from "@infrastructure/views/react-ui/src/PostForm";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("@msw/browser");
  worker.start();
}

function App() {
  const [posts, setPost] = useState<Post[]>([]);

  const fetchPost = async () => {
    const posts = await postService(postRepository()).getPosts();
    setPost(() => posts);
  };

  const deletePost = (id: number) => {
    const newPosts = postService(postRepository()).deletePost(id, posts);
    setPost(() => newPosts);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <PostForm posts={posts} onDeletePost={deletePost} />
    </div>
  );
}

export default App;
