/** @jsxImportSource @emotion/react */

import { Box, Button, Container, css } from "@mui/material";
import React, { useRef, useState } from "react";
import PostCreateInfo from "../components/PostCreateInfo";
import { useNavigate } from "react-router-dom";
import { PostInfoProps } from "../types/PostTypes";
import TuiEditor from "../components/TuiEditor";
import { Editor } from "@toast-ui/react-editor";

const styles = {
  container: css({
    marginTop: "30px",
  }),

  buttonBox: css({
    marginTop: "30px",
    marginRight: "10px",
  }),

  writeButton: css({
    marginRight: "20px",
    backgroundColor: "#747474",
    "&:hover": {
      backgroundColor: "#3e3e3e", // 호버 시 배경색
      color: "white", // 호버 시 폰트 색상
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#ffffff", // 포커스 시 배경색
      color: "black", // 포커스 시 폰트 색상
    },
  }),

  postButton: css({
    backgroundColor: "#3e3e3e",
    "&:hover": {
      backgroundColor: "#3e3e3e", // 호버 시 배경색
      color: "white", // 호버 시 폰트 색상
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#ffffff", // 포커스 시 배경색
      color: "black", // 포커스 시 폰트 색상
    },
  }),
};

function PostCreatePage() {
  const editorRef = useRef<Editor>(null);

  const navigate = useNavigate();

  const [postId] = useState<number>(new Date().getTime());

  const [postImage, setPostImage] = useState<File>();

  const [postInfo, setPostInfo] = useState<PostInfoProps>({
    postId,
    postInfoId: new Date().getTime(),
    postTitle: "",
    postTags: [],
    postView: 0,
    postLike: 0,
    postImageUrl: "",
  });

  const getContents = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    const htmlContent = editorRef.current?.getInstance().getHTML();

    console.log(markdownContent, htmlContent);
  };

  const handleImage = async (file: File, callback: typeof Function) => {
    // const imageUrl = await getImageUrl(file);
    // callback(imageUrl);

    const handleImage = async (file: File, callback: typeof Function) => {};
  };

  return (
    <Container maxWidth="md" css={styles.container}>
      <PostCreateInfo
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        setPostImage={setPostImage}
      ></PostCreateInfo>
      <Box css={styles.buttonBox}>
        {/* <TuiEditor editorRef={editorRef} /> */}
        <TuiEditor editorRef={editorRef} imageHandler={handleImage} />
        <Button variant="contained" css={styles.writeButton}>
          작성하기
        </Button>
        <Button
          variant="contained"
          css={styles.postButton}
          onClick={getContents}
        >
          게시하기
        </Button>
      </Box>
    </Container>
  );
}
export default PostCreatePage;
