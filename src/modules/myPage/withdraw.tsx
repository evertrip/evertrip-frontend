import { Container, Box, Button, Typography, FormControl, OutlinedInput } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '90vh',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 0,
    padding: 10,
    border: '1px solid grey',
  },
  box1: {
    marginTop: 2,
    backgroundColor: '#D32F2F',
    width: '100%',
    minHeight: '15vh',
    display: 'flex',
    alignItems: "center"
  },
  box2: {
    marginTop: 10,
  },
  button: {
    width: '20%',
    height: '5vh',
    marginTop: 15,
    backgroundColor: '#D32F2F',
    '&:hover': {
      backgroundColor: '#9A0007',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
    }
  },
  form: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px'
  }
};

const announcement= "정말로 회원 탈퇴하시겠습니까? 회원 탈퇴 시 본인이 작성한 게시글도 함께 삭제되며 복구하실 수 없습니다. 그래도 회원 탈퇴를 원하신다면 아래 텍스트에 “회원 탈퇴 완료”를 적으시고 탈퇴하기 버튼을 눌러주세요.";

function Withdraw() {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (window.confirm("회원 탈퇴를 진행하시겠습니까?")) {
      if (inputValue !== "회원 탈퇴 완료") {
        alert("회원 탈퇴 완료로 입력해야 합니다.");
      } else {
        // 회원 탈퇴 API 요청
        alert("회원 탈퇴 완료!");

        // 사용자 정보 삭제

        // 메인 페이지로 이동
        navigate('/');
      }
    }
  }, [inputValue, navigate]);

  return (
    <Container sx={{ maxWidth: "1150px", marginTop: "60px", "@media (max-width: 600px)": { marginTop: "30px" } }}>
      <Box sx={styles.container}>
        <Box sx={styles.box1}>
          <img src="/images/exclamationMark.jpg" style={{ width: '10%', height: '10%', marginLeft: '15%', marginRight: '10%' }} />
          <Typography sx={{ fontSize: '50px', color: 'white' }}>회원 탈퇴 진행</Typography>
        </Box>
        <Typography sx={{ marginTop: '10%', color: 'gray', fontSize: '20px' }}>{announcement}</Typography>
        <Box sx={styles.box2}>
          <Box component="form" sx={styles.form} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <FormControl sx={{ width: '600px' }}>
              <OutlinedInput
                placeholder="회원 탈퇴 완료를 입력하세요."
                value={inputValue}
                onChange={handleInputChange}
                sx={{ input: { color: 'red' }, height: '7vh', fontSize: '20px', fontWeight: '900', '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'red', } }}
              />
            </FormControl>
            <Button type="submit" variant="contained" sx={styles.button}>회원 탈퇴 하기</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Withdraw;