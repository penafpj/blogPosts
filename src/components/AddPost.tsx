import PostForm from "./PostForm";
import { PostNew } from "../types/Post";
import { useAddPost } from "../services/post.queries";

const AddPost = () => {
  const addPost = useAddPost();

  const handleAddPost = (post: PostNew) => {
    addPost.mutate({
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
