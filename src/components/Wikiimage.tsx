import * as React from "react";
import styles from "./Wikiimage.scss";

class Wikiimage extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.wikiImage}>
        <a className={styles.thumb} href="#">
          <img
            src={require("../images/keleseth.png")}
            className={styles.mini}
            alt={`<img
                src={require("../images/keleseth.gif")}
                className={styles.origin}
              />`}
          />
          <span>
            <img
              src={require("../images/keleseth.gif")}
              className={styles.origin}
              alt={"origin"}
            />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie2.jpg" alt="" />
          <span>
            <img src="images/jamie2big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie1.jpg" alt="" />
          <span>
            <img src="images/jamie1big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie2.jpg" alt="" />
          <span>
            <img src="images/jamie2big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie1.jpg" alt="" />
          <span>
            <img src="images/jamie1big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie2.jpg" alt="" />
          <span>
            <img src="images/jamie2big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie1.jpg" alt="" />
          <span>
            <img src="images/jamie1big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie2.jpg" alt="" />
          <span>
            <img src="images/jamie2big.jpg" alt="" />
          </span>
        </a>
        <a className={styles.thumb} href="#">
          <img src="images/jamie1.jpg" alt="" />
          <span>
            <img src="images/jamie1big.jpg" alt="" />
          </span>
        </a>
      </div>
    );
  }
}

export default Wikiimage;
