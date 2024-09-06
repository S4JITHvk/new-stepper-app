import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
  <Toaster/>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
