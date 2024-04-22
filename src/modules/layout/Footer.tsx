import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";

/**
 * Layout의 Footer 입니다
 * @returns Footer
 * @author 박창우
 */
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
          backgroundColor: "#1976d2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            opacity: "0.7",
            gap: "100px",
            "@media (max-width: 600px)": {
              paddingRight: "10px",
              flexDirection: "column",
              gap: "20px",
            },
            paddingRight: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={"/images/footer/github.png"}
              alt="github"
              style={{
                width: "25px",
                height: "25px",
                marginBottom: "5px",
              }}
            />
            <Typography
              onClick={() => window.open("https://github.com/evertrip")}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              GitHub
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={"/images/footer/notion.png"}
              alt="notion"
              style={{
                width: "28px",
                height: "auto",
              }}
            />
            <Typography
              onClick={() =>
                window.open(
                  "https://www.notion.so/9ce746d23d204908b4d202f9f71fef4a?v=4ae3ab768ef942048ea608c97d4e314d"
                )
              }
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Notion
            </Typography>
          </Box>
        </Box>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // opacity: "0.9",
              paddingLeft: "24px",
            }}
          >
            <img
              src={"/images/loginImages/13.png"}
              alt="로고"
              style={{
                width: "350px",
                height: "auto",
                marginLeft: "10px",
              }}
            />
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            opacity: "0.7",
            gap: "100px",
            "@media (max-width: 600px)": {
              paddingLeft: "10px",
              flexDirection: "column",
              gap: "20px",
            },
            paddingLeft: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={"/images/footer/erd.png"}
              alt="erd"
              style={{
                width: "32px",
                height: "32px",
              }}
            />

            <Typography
              onClick={() =>
                window.open("https://www.erdcloud.com/d/riCmn8i82TgD5S6cE")
              }
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                justifyContent: "flex-end",
              }}
            >
              ERD Cloud
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={"/images/footer/swagger.png"}
              alt="swagger"
              style={{
                width: "30px",
                height: "30px",
              }}
            />

            <Typography
              onClick={() =>
                window.open("https://ever-trip/swagger-ui/index.html")
              }
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                justifyContent: "flex-end",
              }}
            >
              API Docs
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
