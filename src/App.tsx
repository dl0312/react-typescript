import * as React from "react";
import styles from "./App.scss";
// import Board from "./components/Board";
import MyEditor from "./components/MyEditor";
import Navigation from "./components/Navigation";
// import Todo from "./components/Todo";

const App = (props: any) => {
  return (
    <div className={styles.app}>
      <Navigation />
      {/* <Todo /> */}
      <MyEditor />
      {/* <Board /> */}
    </div>
  );
};

// section 어떻게 const로 만드는 지?

export default App;
