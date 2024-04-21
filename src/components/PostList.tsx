import { useState } from "react";
import { usePosts } from "../services/post.queries";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddPost from "./AddPost";
import { AgGridReact } from "ag-grid-react";

const PostList = () => {
  const postsQuery = usePosts();

  if (postsQuery.isPending) return <span>...loading</span>;

  if (postsQuery.isError) return <span>Error retrieving data</span>;

  //  Temp
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
  //  Temp

  return (
    <>
      <AddPost />
      <section>
        {postsQuery.data.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </section>
      <section>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </section>
    </>
  );
};

export default PostList;
