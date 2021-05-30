import DisplayTitle from "./Components/DisplayTitle";
import axios from "axios";
//import './App.css';
import { useState } from "react";

function App() {
  var [postInfo, setpostInfo] = useState(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setpostInfo(response.data);
    });
  });
  //console.log(postInfo);

  return (
    <div className="App ui raised very padded text container segment">
      <h2 class="ui header">React Posts task</h2>
      <form
        className="ui form"
        action="https://jsonplaceholder.typicode.com/posts"
        method="post"
      >
        <div className="field">
          <label>UserID</label>
          <input type="number" name="userId" />
        </div>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" />
        </div>

        <div className="field">
          <label>Post</label>
          <input type="text" name="body" />
        </div>

        <input type="submit" className="positive ui button" />
      </form>
      <DisplayTitle postInfo={postInfo} />
    </div>
  );
}

export default App;
