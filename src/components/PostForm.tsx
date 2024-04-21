import { useState } from "react";
import { Post } from "../types/Post";

interface Props {
  onSubmit: (post: Post) => void;
}

const PostForm = ({ onSubmit }: Props) => {
  const newPost: Post = {
    title: "",
    body: "",
    completed: false,
    completionDate: undefined,
  };

  const [post, setPost] = useState<Post>(newPost);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(post);
    setPost(newPost); //  reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          id="body"
          type="text"
          name="body"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default PostForm;
