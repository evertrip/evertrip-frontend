import { Container } from "@mui/material";
import { css } from "@emotion/react";
import React from "react";

const styles = {
    drawerBox: css({
      width: 250,
    }),
  
    nicknameInput: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }),
  
    avatarArea: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "150px",
    }),
  
    avatarImage: css({
      width: 100,
      height: 100,
    }),
  
    divider: css({
      marginTop: "10px",
      marginBottomL: "10px",
    }),
  };

function Profile() {
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
        
      <h2>프로필 페이지 입니다!</h2>
    </Container>
  );
}

export default Profile;