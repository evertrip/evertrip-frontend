import { Container,Box,Typography,Pagination, PaginationItem } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
    { 
      postId: 1,
      title: '1번 게시글',
      postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
      memberProfileId: 1,
      memberNickname: '강욱회원',
      memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
      createdAt: '2024-05-09 14:22:11',
      view: '396k views',
      likeCount: '135 likes'
    },
    { 
        postId: 2,
        title: '2번 게시글',
        postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
        memberProfileId: 2,
        memberNickname: '창우회원',
        memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
        createdAt: '2024-05-10 14:22:11',
        view: '396k views',
        likeCount: '135 likes'
      },
      { 
        postId: 3,
        title: '3번 게시글',
        postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
        memberProfileId: 3,
        memberNickname: '혜민회원',
        memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
        createdAt: '2024-05-11 14:22:11',
        view: '396k views',
        likeCount: '135 likes'
      },
      { 
        postId: 4,
        title: '4번 게시글',
        postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
        memberProfileId: 1,
        memberNickname: '강욱회원',
        memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
        createdAt: '2024-05-09 14:22:11',
        view: '396k views',
        likeCount: '135 likes'
      },
      { 
          postId: 5,
          title: '5번 게시글',
          postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
          memberProfileId: 2,
          memberNickname: '창우회원',
          memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
          createdAt: '2024-05-10 14:22:11',
          view: '396k views',
          likeCount: '135 likes'
        },
        { 
          postId: 6,
          title: '6번 게시글',
          postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
          memberProfileId: 3,
          memberNickname: '혜민회원',
          memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
          createdAt: '2024-05-11 14:22:11',
          view: '396k views',
          likeCount: '135 likes'
        },
        { 
            postId: 7,
            title: '7번 게시글',
            postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
            memberProfileId: 1,
            memberNickname: '강욱회원',
            memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
            createdAt: '2024-05-09 14:22:11',
            view: '396k views',
            likeCount: '135 likes'
          },
          { 
              postId: 8,
              title: '8번 게시글',
              postProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_post_image.jpg',
              memberProfileId: 2,
              memberNickname: '창우회원',
              memberProfileImage: 'https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg',
              createdAt: '2024-05-10 14:22:11',
              view: '396k views',
              likeCount: '135 likes'
            }
  ];

const styles = {
    container: ({
      display: 'grid',
      width: '100%',
      margin: 0,
      padding: 3,
      gap: 1,
      border: '2px solid grey',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)'
    }),
    item: ({
      width: '100%',
      my: 1,
      p:2,
      "&:hover": {
        backgroundColor: '#f4f4f4',
        cursor: 'pointer'
    }})
  };

  interface PostProps {
    dataList: Array<{postId: number,
        title: string,
        postProfileImage: string,
        memberProfileId: number,
        memberNickname: string,
        memberProfileImage: string,
        createdAt: string,
        view: string,
        likeCount: string}>
  }
  
  function Post({dataList}: PostProps) {

    const navigate = useNavigate();
 
  
    return (
      <Box sx={styles.container}>
        {dataList.map((item, index) => (
          <Box key={index} sx={styles.item} onClick={() => navigate(`/posts/${item.postId}`)}>
            {(
              <img
                style={{ width: '95%', height: '55%' }}
                src={item.postProfileImage}
              />
            )}
            {(
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                <img
                style={{ width: '10%', height: '10%' }}
                src={item.memberProfileImage}
                />
                  {item.memberNickname}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {`${item.view} • ${item.likeCount}` }
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {`생성날짜: ${item.createdAt}`}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    );
  }

function PostList() {

  const navigate = useNavigate();
  const {search} = useLocation();
  const queryParams = React.useMemo(() => new URLSearchParams(search), [search]);
  const [page, setPage] = useState(parseInt(queryParams.get("page") || "1"));

  useEffect(() => {
    const newPage = queryParams.get("page") || "1";
    setPage(parseInt(newPage));
  }, [queryParams]);


  const handlePageChange = (event: React.ChangeEvent<unknown>, value:number) => {
    navigate(`/postList?page=${value}`)
  }

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
    <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Post dataList={data}/>
      <Pagination count={10} variant="outlined" color="primary" sx={{mt: 4,mb: 2}} onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem {...item}/>
        )}
      />
    </Box>
    </Container>
  );
}

export default PostList;