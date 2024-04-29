import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostList from "./components/PostList";
import { Route, Routes } from "react-router-dom";
import { MainNavigation } from "./components/MainNavigation";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <MainNavigation />
      <hr />
      <Routes>
        <Route path="/" Component={PostList} />
        <Route path="/posts/:id/edit" Component={EditPost} />
      </Routes>
    </>
  );
}

export default App;
