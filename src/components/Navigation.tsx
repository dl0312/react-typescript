import * as React from "react";
import styles from "./Navigation.scss";

interface IState {
  search: boolean;
}

class Navigation extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: false
    };
  }

  public toggle = () => {
    const search: boolean = this.state.search;
    this.setState({
      search: !search
    });
  };

  public render() {
    console.log(this.state);
    return (
      <div className={styles.navigation}>
        <div className={styles.inner}>
          <div className={styles.titleColumn}>
            <img
              src={require("../images/claplogo.png")}
              className={styles.logo}
              alt={"logo"}
            />
            <img
              src={require("../images/claptitle.png")}
              className={styles.title}
              alt={"title"}
            />
            <span className={styles.subtitle}>Share your game guide</span>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Create Guide</div>
            <div className={styles.subtitle}>the builder</div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Builds & Guides</div>
            <div className={styles.subtitle}>league of legends</div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Champions</div>
            <div className={styles.subtitle}>build stats</div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Tier Lists</div>
            <div className={styles.subtitle}>rank champions</div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Community</div>
            <div className={styles.subtitle}>mobafire</div>
          </div>
          <div className={styles.column}>
            <input
              onClick={this.toggle}
              placeholder={"search"}
              className={styles.checkbox}
            />
            <span className={styles.title}>
              {this.state.search ? "SEARCH" : "CLOSE"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
