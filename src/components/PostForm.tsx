import { useState } from "react";
import { Post } from "../types/Post";

interface Props {
  isAdd: boolean;
  existingPost?: Post;
  onSubmit: (post: Post) => void;
}

const PostForm = ({ isAdd, existingPost, onSubmit }: Props) => {
  const newPost: Post = {
    id: "",
    title: "",
    body: "",
    completed: false,
    completionDate: undefined,
  };

  const initPostState = isAdd ? newPost : existingPost!;

  const [post, setPost] = useState<Post>(initPostState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(post);
    setPost(newPost); //  reset the form
  };

  const handleCompletedCheckbox = () => {
    const completed = !post.completed;
    const completedDate = completed ? new Date() : undefined;
    setPost({ ...post, completed: completed, completionDate: completedDate });
  };

  return (
    <>
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
        <div>
          <label htmlFor="completed">Completed</label>
          <input
            id="completed"
            type="checkbox"
            name="completed"
            checked={post.completed}
            onChange={handleCompletedCheckbox}
          />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      <hr />
      <div>existingPost:</div>
      {JSON.stringify(existingPost)}
      <hr />
      <div>initPostState: </div>
      {JSON.stringify(initPostState)}
      <hr />
      <div>Post values with useState</div>
      {JSON.stringify(post)}
    </>
  );
};

export default PostForm;
