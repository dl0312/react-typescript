import * as React from "react";
import styles from "./Wiki.scss";
import Wikihierarchy from "./Wikihierarchy";
import Wikiimage from "./Wikiimage";

class Wiki extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.wiki}>
        <Wikihierarchy />
        <Wikiimage />
      </div>
    );
  }
}

export default Wiki;
