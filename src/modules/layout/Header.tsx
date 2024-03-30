import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const styles = {
  box: { flexGrow: 1, display: "center", alignItems: "flex-end" },
  headerStyle: {
    backgroundColor: "#ebebeb",
    boxShadow: "none",
    height: "110px",
    marginBottom: "0",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    height: "60px",
    marginTop: "15px",
  },
};

function Header() {
  return (
    <Box sx={{ ...styles.box }} height={90}>
      <AppBar position="static" sx={{ ...styles.headerStyle }}>
        <Toolbar sx={{ ...styles.toolbar }}>bar입니당...</Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
