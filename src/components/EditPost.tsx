import { useNavigate, useParams } from "react-router-dom";

import PostForm from "./PostForm";
import { Post } from "../types/Post";
import { useUpdatePost } from "../services/useUpdatePost";
import { usePostById } from "../services/usePostById";

const EditPost = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const updatePost = useUpdatePost();

  const { isError, isLoading, data: post, error } = usePostById(id!);

  if (isError) return `Error Message: ${error.message}`;
  if (isLoading) return "getting data....";

  const handleUpdatePost = (post: Post) => {
    if (post.completed) post.completionDate = new Date();

    updatePost.mutate({
      ...post,
    });
  };

  if (updatePost.isSuccess) navigate("/");

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm initialPostValue={post!} onSubmit={handleUpdatePost} />
    </>
  );
};

export default EditPost;
