import PostForm from "./PostForm";
import { useAddPost } from "../services/post.queries.hooks";
import { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const addPost = useAddPost();
  const navigate = useNavigate();
  const newPost: Post = {
    id: "",
    title: "",
    body: "",
    completed: false,
    completionDate: undefined,
  };

  const handleAddPost = (post: Post) => {
    if (post.id == "") post.id = self.crypto.randomUUID();

    addPost.mutate({
      ...post,
    });

    navigate("/");
  };

  return (
    <>
      <h1>Add Post</h1>
      <PostForm onSubmit={handleAddPost} initialPostValue={newPost} />
    </>
  );
};

export default AddPost;
