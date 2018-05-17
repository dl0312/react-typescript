import * as React from "react";
import styles from "./DatabaseNav.scss";

// this is right section nav

class DatebaseNav extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.nav}>
        <div className={styles.title}>database navigation</div>
        <div className={styles.section}>
          <button className={styles.btn || styles.selected}>champion</button>
          <button className={styles.btn}>items</button>
          <button className={styles.btn}>ablities</button>
          <button className={styles.btn}>runes</button>
          <button className={styles.btn}>summoner spell</button>
          <button className={styles.btn}>skins</button>
        </div>
      </div>
    );
  }
}

export default DatebaseNav;
