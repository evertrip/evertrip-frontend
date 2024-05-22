import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import CustomAxios from './CustomAxios'; // 경로를 확인하세요

const Test = () => {
  const [response1, setResponse1] = useState<any>(null);
  const [response2, setResponse2] = useState<any>(null);
  const postExecuted = useRef(false); // useRef로 플래그 설정

  // GET 요청을 통해 response1 데이터를 가져옴
  useEffect(() => {
    const fetchResponse1 = async () => {
      const response1Data = await CustomAxios('GET', 'http://localhost:8080/api/posts/1');
      setResponse1(response1Data.data);
    };

    fetchResponse1();
  }, []);

  // POST 요청을 한 번만 실행
  useEffect(() => {
    const postData = async () => {
      const principalData = await CustomAxios('GET', 'http://localhost:8080/member');
      const data = {
        dto: {
          title: 'new1'
        },
        principal: principalData.data
      };

      const response = await CustomAxios('POST', 'http://localhost:8080/api/posts', data);
      setResponse2(response);
    };

    // POST 요청이 한 번만 실행되도록 설정
    if (!postExecuted.current) {
      postExecuted.current = true;
      postData();
    }
  }, []); // 빈 배열을 의존성 배열로 전달하여 한 번만 실행되도록 설정

  return (
    <Box>
      <Box>{JSON.stringify(response1)}</Box>
      --------
      <Box>{JSON.stringify(response2)}</Box>
    </Box>
  );
};

export default Test;
