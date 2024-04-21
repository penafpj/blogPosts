import { useQuery } from "@tanstack/react-query";
import { getAllPostsService } from "./post.services";

//  create a Hook.  Naming standard is the preface function name with "use" when creating Hooks
export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsService,
  });
}
