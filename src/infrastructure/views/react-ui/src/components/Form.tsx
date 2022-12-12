import React, { ReactNode } from "react";
import "../App.css";

export const Form = ({ children }: { children: ReactNode }) => {
  return (
    <div className="form">
      {children}
      <button style={{ margin: "10px", width: "100px" }} type="button">
        Add
      </button>
    </div>
  );
};
