import React from "react";
import Mui from "@mui/material";
import { Container,Box,Typography,Pagination, PaginationItem } from "@mui/material";


const styles = {
    container: ({
      display: 'grid',
      width: '100%',
      margin: 0,
      padding: 3,
      gap: '15px',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)'
    }),
    item: ({
      width: '100%',
      my: 1,
      p:2,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "&:hover": {
        backgroundColor: '#f4f4f4',
        cursor: 'pointer'
    }}),
    postbox: ({
      marginTop: '2px',
      marginLeft: '8px'
    })
  };

function EventStatistics(){


    return (
        // 기본 컨테이너
        <Container
          sx={{
            maxWidth: "1150px",
            marginTop: "60px",
          }}
        >
        {/* 내가 작성한 게시글 목록 */}
        <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            내가 작성한 게시글 목록
        </Box>
        {/* 게시글의 이벤트 통계 정보 */}
        <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            게시글의 이벤트 통계 정보
        </Box>
        </Container>
      );
}

export default EventStatistics;