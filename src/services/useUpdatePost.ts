import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../types/Post";
import { axiosClient } from "./api-client";
import { postUrlEntity } from "./post.services";

export const updatePostService = async (post: Post) => {
  return await axiosClient.put(postUrlEntity + `/${post.id}`, post);
};

export function useUpdatePost() {
  //    What you have to do is get access to the client with useQueryClient() -
  //  another hook exported from react-query. This will give you the singleton QueryClient
  //  that you have put into the QueryClientProvider:
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Post) => updatePostService(post),

    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["post", variables.id],
      });

      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
