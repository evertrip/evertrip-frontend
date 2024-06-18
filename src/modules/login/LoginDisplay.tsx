import React from "react";
import {Button, Box} from "@mui/material";

export default function LoginDisplay() {

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const callbackUrl = process.env.REACT_APP_CALLBACK_URL; // Callback URL
  const scope = process.env.REACT_APP_SCOPE

  const NaverLogin = async () => {
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?scope=${scope}&response_type=code&redirect_uri=${callbackUrl}&client_id=${clientId}`
    window.location.href=naverAuthUrl;
  };

    return (
      <>
        <Box style={{ width: '100vn' , height: '80vh' }}>
          <Box style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -40%)', width: '400px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '50px' }}>EVERTRIP</h1>
                  <img src="/images/loginImages/loginIconG.png" onClick={NaverLogin} 
                  style = {{width: '100%', cursor:'pointer'}}/>
              </Box>
          </Box>
      </>
    );
}
