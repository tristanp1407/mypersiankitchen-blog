import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OnePost from "./components/OnePost.js";
import Home from "./components/Home.js";
import PopUp from "./components/PopUp.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={OnePost} path="/:slug" />
        <PopUp />
      </div>
    </BrowserRouter>
  );
}
export default App;
