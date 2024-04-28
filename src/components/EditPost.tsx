import PostForm from "./PostForm";
import { PostNew } from "../types/Post";
import { useAddPost } from "../services/post.queries.hooks";

const EditPost = () => {
  const addPost = useAddPost();

  const handleAddPost = (post: PostNew) => {
    addPost.mutate({
      ...post,
    });
  };

  return (
    <>
      <h1>Edit Post</h1>
      <PostForm onSubmit={handleAddPost} />
    </>
  );
};

export default EditPost;
