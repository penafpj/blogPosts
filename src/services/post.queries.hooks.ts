import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPostService,
  getAllPostsService,
  getPostByIdService,
} from "./post.services";

//  create a Hook.  Naming standard is the preface function name with "use" when creating Hooks
export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsService,
  });
}

export function usePostById(id: number) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostByIdService(id),
  });
}

export function useAddPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
}
