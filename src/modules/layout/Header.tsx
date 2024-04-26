import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../../global.css";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./menu";

// 공통 레이아웃 Header 쪽 설명
// Menu.tsx 파일에 있는 Menu 컴포넌트는 햄버거 아이콘을 클릭하면 열리고 닫히는 Drawer를 제어하는 역할을 합니다. 이를 통해 사용자가 햄버거 아이콘을 클릭하면 메뉴가 열리고 다시 한번 더 클릭하면 메뉴가 닫히게 됩니다.

// Header.tsx 파일에서는 Menu 컴포넌트를 Drawer 안에 넣어서 햄버거 아이콘을 클릭했을 때 Drawer가 열리도록 하고, 사용자가 메뉴 항목을 선택하면 해당 항목에 따른 내용을 보여줍니다.

// 여기서 toggleDrawer 함수는 Drawer가 열리고 닫히는 것을 제어하는 역할을 합니다. 이 함수는 open 변수를 인자로 받아서 이벤트 핸들러를 반환합니다. 이벤트 핸들러는 이벤트 타입이 "keydown"이거나 "Tab" 또는 "Shift" 키가 아닌 경우에만 Drawer를 열거나 닫습니다.

// 즉, toggleDrawer 함수는 open 변수에 따라 Drawer를 열거나 닫을 수 있는 함수를 반환하고, Header 컴포넌트에서 IconButton을 클릭할 때 이 함수를 호출하여 Drawer를 열거나 닫을 수 있습니다.

const ANCHOR_TYPE = "left";

const styles = {
  box: {
    flexGrow: 1,
    display: "center",
    alignItems: "flex-end",
  },
  headerStyle: {
    // backgroundColor: "#??????", >> 추후에 Header 색상 논의 필요
    boxShadow: "none",
    height: "90px",
    marginBottom: "0",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    height: "100px",
    marginTop: "15px",
  },
  menu: {
    color: "white",
  },
};

/**
 * 헤더 컴포넌트입니다. 헤더에는 햄버거 아이콘, 로고, 로그인 버튼이 있습니다.
 *
 * @returns {JSX.Element} 헤더를 포함하는 JSX 엘리먼트를 반환합니다.
 *
 * @author 박창우
 */
function Header() {
  const navigate = useNavigate();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  /**
   * 로고 이미지를 클릭 시 메인 페이지로 이동하는 함수입니다.
   * @author 박창우
   */
  const goMain = () => {
    navigate("/");
  };

  /**
   * Drawer를 열거나 닫는 함수입니다.
   *
   * @param {boolean} open - Drawer를 열지(true) 닫을지(false) 결정하는 변수입니다.
   * @returns {Function} 이벤트 핸들러를 반환합니다.
   *
   * @author 박창우
   */
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpenDrawer(open);
    };
  return (
    <Box sx={{ ...styles.box }} height={90}>
      <AppBar position="static" sx={{ ...styles.headerStyle }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            sx={{ ...styles.menu }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <React.Fragment key={ANCHOR_TYPE}>
            <Drawer
              anchor={ANCHOR_TYPE}
              open={isOpenDrawer}
              onClose={toggleDrawer(false)}
            >
              <Menu toggleDrawer={toggleDrawer} />
            </Drawer>
          </React.Fragment>
          <img
            src="/images/loginImages/16.png"
            alt="everTrip"
            onClick={goMain}
            style={{
              width: "200px",
              height: "200px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          />{" "}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
