import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginDisplay from "./modules/login/LoginDisplay";
import { createGlobalStyle } from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./modules/layout/Layout";
import SignUpDisplay from "./modules/login/SignUpDisplay";
import PostCreatePage from "./modules/post/postCreatePage/routers/PostCreatePage";
import Main from "./modules/main/routers/MainPageDisplay";
import Profile from "./modules/myPage/profile";
import PostList from "./modules/myPage/postList";
import Withdraw from "./modules/myPage/withdraw";

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family:NanumSquareRound;
  font-style:normal;
  font-weight:300;
  src:local("NanumSquareRoundL"),
  url(NanumSquareRoundL.eot),
  url(NanumSquareRoundL.eot?#iefix) format("embedded-opentype"),
  url(NanumSquareRoundL.woff2) format("woff2"),
  url(NanumSquareRoundL.woff) format("woff"),
  url(NanumSquareRoundL.ttf) format("truetype")
}

    body {
      font-family: "NanumSquare", "Arial", sans-serif;
      margin: 0;
      padding: 0;
    }

    *::-webkit-scrollbar {
      width: 8px;
    }
  
    *::-webkit-scrollbar-thumb {
      background-color: #3e3e3e;
      border-radius: 5px;
    }

    .swal2-popup {
      width: 300px;
      font-size: 14px;
    }
  `;

const Theme = createTheme({
  typography: {
    fontFamily: "nanumsquare",
  },
});

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginDisplay />} />
            <Route path="/signup" element={<SignUpDisplay />} />
            <Route path="/" element={<Main />} />
            {/* <Route path="/post/create" element={<CreationPost />} /> => 예시입니다!!! */}
            {/* 내 프로필 조회(수정) */}
            <Route path="/profile" element={<Profile />} />
            {/* 내 게시글 목록 조회 */}
            <Route path="/postList" element={<PostList />} />
            {/* 회원 탈퇴 */}
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/post/create" element={<PostCreatePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
