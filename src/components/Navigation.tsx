import * as React from "react";
import { NavLink } from "react-router-dom";

import Ionicon from "react-ionicons";
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
        <div className={styles.miniNav}>
          <div className={styles.mfn}>
            <div className={styles.text}>MFN</div>
          </div>
          <NavLink to="/" className={styles.site}>
            <img
              src={require("../images/Hearthstone-Logo.png")}
              className={styles.logo}
              alt={"logo"}
            />
            <div className={styles.name}>hearthstone</div>
          </NavLink>
          <div className={styles.site}>
            <img
              src={require("../images/logo_opgg.png")}
              className={styles.logo}
              alt={"logo"}
            />
            <div className={styles.name}>opgg</div>
          </div>
          <div className={styles.site} />
          <a
            href={"https://www.mobafire.com/network-log-in"}
            className={styles.site}
          >
            <div className={styles.name}>join now</div>
          </a>
          <a
            href={"https://www.mobafire.com/network-log-in"}
            className={styles.site}
          >
            <div className={styles.name}>log in</div>
          </a>
          <div className={styles.site}>
            <div className={styles.social}>social login</div>
            <img
              src={require("../images/logo_opgg.png")}
              className={styles.logo}
              alt={"logo"}
            />
          </div>
        </div>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.titleColumn}>
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
          </NavLink>
          <NavLink to="/board" className={styles.column}>
            <div className={styles.title}>Create Guide</div>
            <div className={styles.subtitle}>the builder</div>
          </NavLink>
          <NavLink to="/wiki" className={styles.column}>
            <div className={styles.title}>Builds & Guides</div>
            <div className={styles.subtitle}>league of legends</div>
          </NavLink>
          <NavLink to="/myeditor" className={styles.column}>
            <div className={styles.title}>Champions</div>
            <div className={styles.subtitle}>build stats</div>
          </NavLink>
          <NavLink to="/todo" className={styles.column}>
            <div className={styles.title}>Tier Lists</div>
            <div className={styles.subtitle}>rank champions</div>
          </NavLink>
          <NavLink to="/" className={styles.column}>
            <div className={styles.title}>Community</div>
            <div className={styles.subtitle}>mobafire</div>
          </NavLink>
          {/* <div className={styles.column}>
            <input onClick={this.toggle} placeholder={"search"} className={styles.checkbox} />
            <span className={styles.searchText}>
              {this.state.search ? "SEARCH" : "CLOSE"}
            </span>
          </div> */}
          <div className={styles.column}>
            <button onClick={this.toggle} className={styles.btn}>
              {!this.state.search ? (
                <Ionicon icon="ios-search" fontSize="25px" color="white" />
              ) : (
                <Ionicon icon="ios-close" fontSize="25px" color="white" />
              )}
              <span className={styles.searchText}>
                {!this.state.search ? "SEARCH" : "CLOSE"}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
