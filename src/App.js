import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<>Home Page</>}></Route>
        <Route path="/blog" element={<BlogPage>Blog</BlogPage>}></Route>
        <Route
          path="/profile"
          element={<ProfilePage>Blog</ProfilePage>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
