import React, { useEffect } from "react";
import logo from "./logo.svg";
import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";
import Button from "@components/Button";
import "./App.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("@msw/browser");
  worker.start();
}

function App() {
  const fetchPost = async () => {
    console.log("posts", await postService(postRepository()).getPosts());
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
