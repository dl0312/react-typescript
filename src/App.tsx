import * as React from "react";
import styles from "./App.scss";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className={styles.app}>
      <Todo />
    </div>
  );
};

// section 어떻게 const로 만드는 지?

export default App;
