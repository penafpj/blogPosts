import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { ICellRendererParams } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { usePosts } from "../services/post.queries.hooks";
import AddPost from "./AddPost";
import CustomButton from "./grid/CustomButton";

const PostList = () => {
  const postsQuery = usePosts();

  if (postsQuery.isPending) return <span>...loading</span>;
  if (postsQuery.isError) return <span>Error retrieving data</span>;

  //  custom cell renderer using the values from the specified FieldName
  const displayValue = (props: ICellRendererParams) => {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

    return <h4>{cellValue}</h4>;
  };

  const actionButtons = (props: ICellRendererParams) => {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    return (
      <span onClick={() => console.log(cellValue)}>
        <FontAwesomeIcon icon={faEdit} />
      </span>
    );
  };

  const colDefs: ColDef[] = [
    { field: "title", width: 160 },
    { field: "body", width: 200 },
    { field: "completed", width: 150 },
    { field: "completedDate", width: 150 },
    {
      field: "id",
      headerName: "Actions",
      editable: true,
      cellRenderer: actionButtons,
      width: 100,
    },
    {
      field: "ActionButtons",
      headerName: "Action Buttons",
      cellRenderer: CustomButton,
    },
    {
      field: "id",
      headerName: "Row Value",
      cellRenderer: displayValue,
    },
  ];

  return (
    <>
      <AddPost />
      <Button>Test</Button>
      <section>
        {postsQuery.data.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </section>
      <div className="ag-theme-quartz" style={{ height: "300px" }}>
        <h2>Grid</h2>
        <AgGridReact rowData={postsQuery.data.data} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default PostList;
