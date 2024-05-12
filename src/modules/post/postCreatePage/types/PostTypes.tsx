import React from "react";

export interface PostInfoProps {
  postId: number;
  postInfoId: number;
  postTitle: string;
  postTags: string[];
  postView?: number;
  postLike?: number;
  postImageUrl?: string;
}

export interface CreatePostInfoProps {
  postInfo: PostInfoProps;
  setPostInfo: React.Dispatch<React.SetStateAction<PostInfoProps>>;
  previewImage?: string;
  setPostImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}
