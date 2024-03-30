import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginDisplay from "./modules/login/LoginDisplay";
import Layout from "./modules/layout/Layout";
import Main from "./modules/main/routers/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginDisplay />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          {/* <Route path="/post/create" element={<CreationPost />} /> => 예시입니다!!! */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
