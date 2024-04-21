import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm";
import { createPostService } from "../services/post.services";
import { PostNew } from "../types/Post";

const AddPost = () => {
  const queryClient = useQueryClient();

  const createPost = useMutation({
    mutationFn: createPostService,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const handleAddPost = (post: PostNew) => {
    createPost.mutate({
      ...post,
    });
  };

  return (
    <>
      <h1>Add Post</h1>
      <PostForm onSubmit={handleAddPost} />
    </>
  );
};

export default AddPost;
