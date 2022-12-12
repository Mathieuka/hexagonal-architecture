import { Post } from "@domain/models/Post";
import { Form } from "@components/Form";
import React from "react";

export const PostForm = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Form>
        <div style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Enter the title" />
          <input type="text" placeholder="Enter the content" />
        </div>
      </Form>
      <Posts posts={posts} />
    </>
  );
};

const Posts = ({ posts }: { posts: Post[] }) => {
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
              <button>X</button>
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
