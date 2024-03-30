import { Box, Divider } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Divider sx={{ marginTop: "70px" }}></Divider>
      <Box
        sx={{
          position: "static",
          display: "flex",
          bottom: 0,
          width: "100%",
          height: "180px",
          justifyContent: "center",
          zIndex: 1000,
          alignItems: "center",
        }}
        color="ebebeb"
      ></Box>
    </div>
  );
}

export default Footer;
