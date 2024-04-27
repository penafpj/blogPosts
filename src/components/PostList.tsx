import { usePosts } from "../services/post.queries.hooks";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddPost from "./AddPost";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

const PostList = () => {
  const postsQuery = usePosts();

  if (postsQuery.isPending) return <span>...loading</span>;
  if (postsQuery.isError) return <span>Error retrieving data</span>;

  const colDefs: ColDef[] = [
    { field: "title", width: 160 },
    { field: "body", width: 200 },
    { field: "completed", width: 150 },
    { field: "completedDate", width: 150 },
  ];

  return (
    <>
      <AddPost />
      <section>
        {postsQuery.data.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </section>
      <div
        className="ag-theme-quartz"
        style={{ height: "300px", width: "680px" }}
      >
        <h2>Grid</h2>
        <AgGridReact rowData={postsQuery.data.data} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default PostList;
