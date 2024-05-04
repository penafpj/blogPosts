import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPostService, getAllPostsService } from "./post.services";

//  create a Hook.  Naming standard is the preface function name with "use" when creating Hooks
export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsService,
  });
}

export function useAddPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPostService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
}
