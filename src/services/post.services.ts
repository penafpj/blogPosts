import { Post } from "../types/Post";
import { axiosClient } from "./api-client";

export const postUrlEntity = "/posts";

export const getAllPostsService = async () => {
  return await axiosClient.get<Post[]>(postUrlEntity);
};

export const addPostService = async (post: Post) => {
  return await axiosClient.post(postUrlEntity, post);
};
