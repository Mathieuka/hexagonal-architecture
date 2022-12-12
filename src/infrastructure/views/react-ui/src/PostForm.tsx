import { Post } from "@domain/models/Post";
import { Form } from "@components/Form";
import React from "react";

export const PostForm = ({
  posts,
  onDeletePost,
}: {
  posts: Post[];
  onDeletePost: (id: number) => void;
}) => {
  return (
    <>
      <Form>
        <div style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Enter the title" />
          <input type="text" placeholder="Enter the content" />
        </div>
      </Form>
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
