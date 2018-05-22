import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import styles from "./App.scss";
import Board from "./components/Board";
import MyEditor from "./components/MyEditor";
import Navigation from "./components/Navigation";

import Todo from "./components/Todo";
import Wiki from "./components/Wiki";

// import Todo from "./components/Todo";

const App = (props: any) => {
  return (
    <div className={styles.app}>
      <Navigation />
      {/* <Link to="/"> HOME </Link>
        <Link to="/board"> BOARD </Link>
        <Link to="/wiki"> WIKI </Link>
        <Link to="/myeditor"> MYEDITOR </Link>
        <Link to="/todo"> TODO </Link> */}

      <div className={styles.content}>
        <Route path="/" component={""} />
        <Route path="/board" component={Board} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/myeditor" component={MyEditor} />
        <Route path="/todo" component={Todo} />
      </div>
    </div>
  );
};

// section 어떻게 const로 만드는 지?

export default withRouter(App);
