import PostForm from "./PostForm";
import { useAddPost } from "../services/post.queries.hooks";
import { Post } from "../types/Post";

const AddPost = () => {
  const addPost = useAddPost();

  const handleAddPost = (post: Post) => {
    if (post.id == "") post.id = self.crypto.randomUUID();

    addPost.mutate({
      ...post,
    });
  };

  return (
    <>
      <h1>Add Post</h1>
      <PostForm isAdd={true} onSubmit={handleAddPost} />
    </>
  );
};

export default AddPost;
