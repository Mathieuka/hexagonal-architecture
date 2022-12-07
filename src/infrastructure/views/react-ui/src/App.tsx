import React from "react";
import logo from "./logo.svg";
// import { postService } from "@domain/services/Post.services";
// import { postRepository } from "@infrastructure/repositories/postRepository";
// import { httpAxios } from "@infrastructure/instances/httpAxios";
import Button from "@components/Button";
import "./App.css";

function App() {
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