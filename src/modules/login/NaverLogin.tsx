import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NaverLogin = () => {
    // URL 쿼리 파라미터를 가져오기 위해 useSearchParams 훅 사용
    const [searchParams] = useSearchParams();
    // 프로그래밍 방식으로 라우팅하기 위해 useNavigate 훅 사용
    const navigate = useNavigate();
    // Code를 보낼 백앤드 주소
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    // URL에서 'code' 쿼리 파라미터 가져오기
    const code = searchParams.get('code');


  
    useEffect(() => {
      const naverLogin = async() => {
        return await axios.get(`${BASE_URL}/api/auth/Naver/callback?code=${code}`,{ withCredentials: true })
        .then((res) => {
          console.log("로그인 성공 헤더 정보는 아래와 같습니다.")
          console.log(res.headers);
          localStorage.setItem("Authorization",res.headers.authorization);
          localStorage.setItem("Refresh",res.headers.refresh);
        }
      ).then(() => {
          console.log("홈화면으로 이동");
          navigate("/");
        })
      };
  
      if (code) {
        naverLogin();
      }
    },[code,navigate,searchParams])
  
    return (
      <div>로딩페이지컴포넌트</div>
    );
  };
  
  export default NaverLogin;