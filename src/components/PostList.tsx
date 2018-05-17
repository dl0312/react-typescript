import * as React from "react";
import Ionicon from "react-ionicons";
import styles from "./PostList.scss";

class PostList extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.postlist}>
        <div className={styles.explain}>
          <div className={styles.title}>league of legends build guides</div>
          <div className={styles.subtitle}>
            Search League of Legends champions to find stats, build guides,
            skins, videos and more! Find a chamion guide you like? Show the
            author some love by rating their work or maybe tossing them a{" "}
            <a
              className={styles.commendation}
              href={"https://www.mobafire.com/commendations"}
            >
              commendation
            </a>. Or if you prefer,{" "}
            <a
              className={styles.createGuideText}
              href={"https://www.mobafire.com/edit/guide"}
            >
              create your own champion guide
            </a>!
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.champion}>
            <div className={styles.left}>
              <div className={styles.title}>champion:</div>
              <div className={styles.input}>
                <Ionicon
                  className={styles.icon}
                  icon="ios-search"
                  fontSize="25px"
                  color="white"
                />
                <input className={styles.realInput} type="text" />
              </div>
            </div>
            <div className={styles.more}>view champions >></div>
          </div>
          <div className={styles.lane}>
            <div className={styles.title}>lane:</div>
            <button className={styles.btn}>
              <img
                className={styles.img}
                src={require("../images/Hearthstone-Logo.png")}
                alt=""
              />
              <div className={styles.text}>ALL</div>
            </button>
            <button className={styles.btn}>
              <img
                className={styles.img}
                src={require("../images/Hearthstone-Logo.png")}
                alt=""
              />
              <div className={styles.text}>TOP</div>
            </button>
            <button className={styles.btn}>
              <img
                className={styles.img}
                src={require("../images/Hearthstone-Logo.png")}
                alt=""
              />
              <div className={styles.text}>MIDDLE</div>
            </button>
            <button className={styles.btn}>
              <img
                className={styles.img}
                src={require("../images/Hearthstone-Logo.png")}
                alt=""
              />
              <div className={styles.text}>BOTTOM</div>
            </button>
            <button className={styles.btn}>
              <img
                className={styles.img}
                src={require("../images/Hearthstone-Logo.png")}
                alt=""
              />
              <div className={styles.text}>SUPPORT</div>
            </button>
          </div>
          <div className={styles.category}>
            <div className={styles.title}>category:</div>
            <button className={styles.btn}>
              <div className={styles.text}>ALL</div>
            </button>
            <button className={styles.btn}>
              <div className={styles.text}>CHAMPION</div>
            </button>
            <button className={styles.btn}>
              <div className={styles.text}>GENERAL</div>
            </button>
            <button className={styles.btn}>
              <div className={styles.text}>HUMOR</div>
            </button>
            <button className={styles.btn}>
              <div className={styles.text}>TEAM</div>
            </button>
          </div>
          <div className={styles.depth}>
            <div className={styles.title}>depth:</div>
            <button className={styles.btn}>
              <div className={styles.text}>ALL</div>
            </button>
            <button className={styles.btn}>
              <div className={styles.text}>GUIDE</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
