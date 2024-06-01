/** @jsxImportSource @emotion/react */

import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  Typography,
  css,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CreatePostInfoProps, PostInfoProps } from "../types/PostTypes";
import { Tag } from "./TagsInput";

const styles = {
  card: css({
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
    marginBottom: "30px",
  }),

  imageContainer: css({
    marginBottom: "20px",
  }),

  iamgeBox: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px dashed #D1D1D1",
    height: "140px",
    marginBottom: "10px",
  }),

  noImageIcon: css({
    fontSize: "30px",
    color: "#757575",
  }),

  image: css({ width: "100%", height: "100%", objectFit: "contain" }),

  imageUploadButton: css({
    backgroundColor: "#3e3e3e",
  }),

  uploadImage: css({
    width: "100%",
    height: "100%",
    objectFit: "contain",
  }),

  postTitleBox: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  }),

  textStyle: css({
    marginRight: "10px",
    fontWeight: "bold",
    minWidth: "65px",
  }),

  inputStyle: css({
    flexGrow: "1",
  }),

  //   tagSelectContainer: css({
  //     marginBottom: "10px",
  //   }),

  //   tagSelectBox: css({
  //     width: "100%",
  //   }),

  //   tagChipBox: css({
  //     display: "flex",
  //     flexWrap: "wrap",
  //     gap: 0.5,
  //   }),

  //   dateInputStyle: css({
  //     marginTop: "10px",
  //     minWidth: "100px",
  //   }),
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const TITLE_MAX_LENGTH = 32;

function PostCreateInfo({
  postInfo,
  setPostInfo,
  previewImage,
  setPostImage,
}: CreatePostInfoProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    setPostInfo((prevPostInfo) => ({
      ...prevPostInfo,
    }));

    if (previewImage) {
      setSelectedImage(previewImage);
    }
  }, []);

  /**
   * 게시글 제목을 변경하는 메서드 입니다.
   *
   * @param event Input onChange Event
   * @author 박창우
   */
  const handlePostInfoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const updateSurveyInfo: PostInfoProps = {
      ...postInfo,
      [name]: value,
    };

    setPostInfo(updateSurveyInfo);
  };

  /**
   * 이미지 선택시 호출되는 메서드 입니다.
   *
   * @param event React.ChangeEvent<HTMLInputElement>
   * @author 박창우
   */
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile = event.target.files && event.target.files[0];
    if (uploadFile) {
      const imageUrl: string = URL.createObjectURL(uploadFile);

      setPostImage(uploadFile);
      setSelectedImage(imageUrl);
    } else {
      setPostImage(undefined);
      setSelectedImage("");
    }
  };

  const postTitle = (
    <Box css={styles.postTitleBox}>
      <Typography css={styles.textStyle}>게시글 제목</Typography>
      <Input
        placeholder="게시글 제목을 입력해주세요."
        css={styles.inputStyle}
        name="surveyTitle"
        value={postInfo.postTitle}
        onChange={handlePostInfoInputChange}
        inputProps={{ maxLength: TITLE_MAX_LENGTH }}
      />
    </Box>
  );

  return (
    <Card css={styles.card}>
      <CardContent>
        {postTitle}
        <Box css={styles.imageContainer}>
          {!selectedImage && (
            <Box css={styles.iamgeBox}>
              <ImageIcon css={styles.noImageIcon}></ImageIcon>
            </Box>
          )}
          {selectedImage && (
            <div>
              <Box css={styles.iamgeBox}>
                <img
                  src={selectedImage}
                  alt={"게시글 썸네일 이미지"}
                  css={styles.uploadImage}
                  id="postImage"
                ></img>
              </Box>
            </div>
          )}
          <Box>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon></CloudUploadIcon>}
              css={styles.imageUploadButton}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
            </Button>
          </Box>
          <Tag></Tag>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostCreateInfo;
