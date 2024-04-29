import { Post } from "../types/Post";
import { axiosClient } from "./api-client";

const urlEntity = "/posts";

export const getAllPostsService = async () => {
  return await axiosClient.get<Post[]>(urlEntity);
};

export const getPostByIdService = async (id: string) => {
  return await axiosClient.get<Post>(`${urlEntity}/${id}`).then((response) => {
    return response.data;
  });
};

export const addPostService = async (post: Post) => {
  return await axiosClient.post(urlEntity, post);
};

export const updatePostService = async (post: Post) => {
  return await axiosClient.put(urlEntity + `/${post.id}`, post);
};
