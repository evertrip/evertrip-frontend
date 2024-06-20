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
import Profile from "./modules/myPage/MyProfile";
import PostList from "./modules/myPage/MyPostList";
import Withdraw from "./modules/myPage/Withdraw";
import Test from "./modules/config/Test";
import EventStatistics from "./modules/myPage/EventStatistics";
import NaverLogin from "./modules/login/NaverLogin";

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
            <Route path='/NaverLogin' element={<NaverLogin/>}/>
            <Route path="/signup" element={<SignUpDisplay />} />
            <Route path="/" element={<Main />} />
            {/* <Route path="/post/create" element={<CreationPost />} /> => 예시입니다!!! */}
            {/* 내 프로필 조회(수정) */}
            <Route path="/my-profile" element={<Profile />} />
            {/* 내 게시글 목록 조회 */}
            <Route path="/my-postlist" element={<PostList />} />
            {/* 회원 탈퇴 */}
            <Route path="/withdraw" element={<Withdraw />} />
            {/* 게시글 이벤트 통계 페이지 */}
            <Route path="/events-statics" element={<EventStatistics />} />
            <Route path="/post/create" element={<PostCreatePage />} />
            <Route path="/test" element= {<Test/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
