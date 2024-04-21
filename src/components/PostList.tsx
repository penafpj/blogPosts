import { usePosts } from "../services/post.queries";
import AddPost from "./AddPost";

const PostList = () => {
  const postsQuery = usePosts();

  if (postsQuery.isPending) return <span>...loading</span>;

  if (postsQuery.isError) return <span>Error retrieving data</span>;

  return (
    <>
      <AddPost />
      <section>
        {postsQuery.data.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </section>
    </>
  );
};

export default PostList;
