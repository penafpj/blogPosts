import { useState } from "react";
import { Post } from "../types/Post";

interface Props {
  initialPostValue: Post;
  onSubmit: (post: Post) => void;
}

const PostForm = ({ initialPostValue, onSubmit }: Props) => {
  const [post, setPost] = useState<Post>(initialPostValue);

  // useEffect(() => {
  //   setPost(initialPostValue);
  //   console.log("PostForm init");
  //   return () => {
  //     console.log("PostForm unmounting");
  //   };
  // }, [initialPostValue]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(post);
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
      <div>initialPostValue:</div>
      {JSON.stringify(initialPostValue)}
      <hr />
      <div>Post values with useState</div>
      {JSON.stringify(post)}
    </>
  );
};

export default PostForm;
