import * as React from "react";
import PostDetail from "./PostDetail";
import PostList from "./PostList";

class Board extends React.Component<{}> {
  public render() {
    return (
      <React.Fragment>
        <PostDetail />
        <PostList />
      </React.Fragment>
    );
  }
}

export default Board;
