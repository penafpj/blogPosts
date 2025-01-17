import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { ICellRendererParams } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./PostList.css";
import { usePosts } from "../services/post.queries.hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostList = () => {
  const postsQuery = usePosts();
  const navigate = useNavigate();

  if (postsQuery.isPending) return <span>...loading</span>;
  if (postsQuery.isError) return <span>Error retrieving data</span>;

  //  custom cell renderer using the values from the specified FieldName
  const actionButtons = (props: ICellRendererParams) => {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span onClick={() => navigate(`/posts/${cellValue}/edit`)}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span onClick={() => console.log(cellValue)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    );
  };

  const colDefs: ColDef[] = [
    { field: "title", width: 160 },
    { field: "body", width: 200 },
    {
      field: "completed",
      width: 150,
      cellStyle: { backgroundColor: "lightBlue" },
      cellClass: "cellCenter",
      cellRenderer: "agCheckboxCellRenderer",
      cellEditor: "agCheckboxCellEditor",
    },
    { field: "completionDate", width: 150 },
    {
      field: "id",
      headerName: "Actions",
      editable: true,
      cellRenderer: actionButtons,
      cellStyle: { backgroundColor: "lightGreen" },
      width: 100,
    },
  ];

  return (
    <>
      <h2>My Todos</h2>
      <div
        className="ag-theme-quartz"
        style={{ height: "300px", width: "765px" }}
      >
        <AgGridReact rowData={postsQuery.data.data} columnDefs={colDefs} />
      </div>
      <Button onClick={() => navigate("/posts/add")}>Create Post</Button>
    </>
  );
};

export default PostList;
