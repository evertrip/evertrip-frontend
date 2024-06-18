/** @jsxImportSource @emotion/react */

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

// -------------- 부가 설명 ----------------------- >> 주석은 최종적으로 develop에 merge 할 때 삭제하도록 하겠습니다.

// MenuProps 인터페이스는 toggleDrawer 함수를 props로 받습니다. 이 함수는 햄버거 메뉴가 열리거나 닫히는 것을 제어합니다.
// avatarArea는 사용자의 프로필 이미지를 표시하는 영역입니다. 사용자의 프로필 이미지가 있으면 이미지를 표시하고, 없으면 기본 이미지를 사용합니다.
// nicknameInput은 사용자의 닉네임을 표시하는 영역입니다. 사용자가 로그인되어 있으면 닉네임을 표시하고, 로그인되어 있지 않으면 "익명 사용자"를 표시합니다.
// 프로필 정보, 내 게시글 목록, 찜한 게시글 목록은 각각의 아이콘과 함께 리스트 형태로 표시됩니다. 이를 클릭하면 해당 항목의 내용을 확인할 수 있습니다.

// ----------------------------------------------- 상단 햄버거 메뉴 바에서 나중에 유저 정보 불러올 때 대비해서 예시 코드 입니다. 참고해주시기 바랍니다.

//   interface UserInfoProps {
//     userNo: number | null;
//     userImage: string | null;
//     userNickname: string | null;
//   }

interface MenuProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

//   const USER_NO = 'userNo';
//   const USER_IMAGE = 'userImage';
//   const USER_NICKNAME = 'userNickname';
//   const ANONYMOUS_USER_NICKNAME = '익명 사용자';

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

/**
 * 햄버거 메뉴를 표시하는 컴포넌트입니다. 햄버거 메뉴를 클릭하면 사용자 프로필 정보, 게시글 목록, 그리고 찜한 게시글 목록을 표시합니다.
 *
 * @param {Object} props - toggleDrawer 함수를 포함하는 객체입니다.
 * @param {Function} props.toggleDrawer - 햄버거 메뉴가 열리거나 닫히는 것을 제어하는 함수입니다.
 * @returns {JSX.Element} 햄버거 메뉴를 포함하는 JSX 엘리먼트를 반환합니다.
 *
 * @author 박창우
 */
function Menu({ toggleDrawer }: MenuProps) {
  const navigate = useNavigate();
  return (
    <Box
      css={styles.drawerBox}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box css={styles.avatarArea}>
        <Avatar
          // src={userInfo.userImage ? `${userInfo.userImage}` : ''}
          css={styles.avatarImage}
        />
      </Box>
      <Box css={styles.nicknameInput}>
        <Typography>
          {/* {userInfo.userNickname !== null
              ? userInfo.userNickname
              : ANONYMOUS_USER_NICKNAME} */}
        </Typography>
      </Box>

      <Divider css={styles.divider} />

      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/my-profile')}>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="프로필 정보" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/withdraw')}>
              <ListItemIcon>
                <DeleteForeverIcon />
              </ListItemIcon>
              <ListItemText primary="회원 탈퇴" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/my-postlist')}>
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
              <ListItemText primary="내 게시글 목록" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="찜한 게시글 목록" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/events-statics')}>
              <ListItemIcon>
                <SignalCellularAltIcon />
              </ListItemIcon>
              <ListItemText primary="게시글 통계 페이지" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Menu;
