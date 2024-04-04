import { Container } from "@mui/material";
import React from "react";

function Main() {
  return (
    <Container
      sx={{
        maxWidth: "1150px",
        marginTop: "60px",
        "@media (max-width: 600px)": {
          marginTop: "30px",
        },
      }}
    >
      <h2>메인 페이지 입니다!</h2>
    </Container>
  );
}

export default Main;
