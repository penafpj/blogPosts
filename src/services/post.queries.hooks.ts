import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPostService,
  getAllPostsService,
  getPostByIdService,
  updatePostService,
} from "./post.services";
import { Post } from "../types/Post";

//  create a Hook.  Naming standard is the preface function name with "use" when creating Hooks
export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsService,
  });
}

export function usePostById(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostByIdService(id),
  });
}

export function useAddPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPostService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
}

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
