import * as React from "react";
import styles from "./Board.scss";
import DatabaseNav from "./DatabaseNav";
import PostDetail from "./PostDetail";
import PostList from "./PostList";

class Board extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.board}>
        <div className={styles.inner}>
          <div className={styles.post}>
            <PostDetail />
            <PostList />
          </div>
          <div className={styles.nav}>
            <DatabaseNav />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
