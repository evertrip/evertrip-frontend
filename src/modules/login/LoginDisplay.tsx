import React from "react";
import {Button, Box} from "@mui/material";

export default function LoginDisplay() {
    return (
      <>
        <Box style={{ width: '100vn' , height: '80vh' }}>
          <Box style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -40%)', width: '400px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '50px' }}>EVERTRIP</h1>
                  <img src="/images/loginImages/loginIconG.png"
                  style = {{width: '100%'}}/>
              </Box>
          </Box>
      </>
    );
}
