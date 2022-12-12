import { Post } from "@domain/models/Post";
import React, { useState } from "react";

export const PostForm = ({
  posts,
  onDeletePost,
  onCreatePost,
}: {
  posts: Post[];
  onDeletePost: (id: number) => void;
  onCreatePost: (post: { title: string; body: string }) => void;
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter the title"
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Enter the content"
        />
      </div>
      <button
        onClick={() => onCreatePost({ title, body })}
        style={{ margin: "10px", width: "100px" }}
        type="button"
      >
        Add
      </button>
      <Posts posts={posts} onDeletePost={onDeletePost} />
    </>
  );
};

const Posts = ({
  posts,
  onDeletePost,
}: {
  posts: Post[];
  onDeletePost: (id: number) => void;
}) => {
  return (
    <>
      {posts?.map((post) => {
        return (
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "5px",
              }}
            >
              <button onClick={() => onDeletePost(post.id)}>X</button>
            </div>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.body}</p>
          </div>
        );
      })}
    </>
  );
};
