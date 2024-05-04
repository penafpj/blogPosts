import { useQuery } from "@tanstack/react-query";
import { Post } from "../types/Post";
import { axiosClient } from "./api-client";
import { postUrlEntity } from "./post.services";

export const getPostByIdService = async (id: string) => {
  return await axiosClient
    .get<Post>(`${postUrlEntity}/${id}`)
    .then((response) => {
      return response.data;
    });
};

export function usePostById(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostByIdService(id),
  });
}
