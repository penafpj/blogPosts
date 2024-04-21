import { Post, PostNew } from "../types/Post";
import { axiosClient } from "./api-client";

export const getAllPostsService = async () => {
  return await axiosClient.get<Post[]>("/posts");
};

export const createPostService = async (postToAdd: PostNew) => {
  return await axiosClient.post("/posts", postToAdd);
};
