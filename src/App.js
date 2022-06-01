import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import OnePost from "./components/OnePost.js";
import Home from "./components/Home.js";
import PopUp from "./components/PopUp.js";
import MenuPage from "./components/MenuPage.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={OnePost} path="/:slug" />
        <Route component={MenuPage} path="/menu" />
        <PopUp />
      </div>
    </BrowserRouter>
  );
}
export default App;
