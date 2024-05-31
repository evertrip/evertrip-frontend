/** @jsxImportSource @emotion/react */

import { Box, Button, Container, css } from "@mui/material";
import React, { useRef, useState } from "react";
import PostCreateInfo from "../components/PostCreateInfo";
import { useNavigate } from "react-router-dom";
import { PostInfoProps } from "../types/PostTypes";
import EditorBox from "../components/EditorBox";
import { Editor } from "@toast-ui/react-editor";

const styles = {
  container: css({
    marginTop: "30px",
    overflow: "hidden",
  }),

  buttonBox: css({
    display: "flex",
    justifyContent: "center",
    marginRight: "10px",
    marginTop: "60px",
  }),

  writeButton: css({
    marginRight: "20px",
    backgroundColor: "#747474",
    "&:hover": {
      backgroundColor: "#3e3e3e",
      color: "white",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#ffffff",
      color: "black",
    },
  }),

  postButton: css({
    backgroundColor: "#3e3e3e",
    "&:hover": {
      backgroundColor: "#3e3e3e",
      color: "white",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#ffffff",
      color: "black",
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

  return (
    <Container maxWidth="md" css={styles.container}>
      <PostCreateInfo
        postInfo={postInfo}
        setPostInfo={setPostInfo}
        setPostImage={setPostImage}
      />
      <EditorBox editorRef={editorRef} />

      <Box css={styles.buttonBox}>
        <Button variant="contained" css={styles.writeButton}>
          작성하기
        </Button>
        <Button variant="contained" css={styles.postButton}>
          게시하기
        </Button>
      </Box>
    </Container>
  );
}

export default PostCreatePage;
