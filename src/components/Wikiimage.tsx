import * as React from "react";
import Pos from "./Pos";
import styles from "./Wikiimage.scss";

interface IState {
  pos: Pos;
  isInArea: boolean;
}

class Wikiimage extends React.Component<{}, IState> {
  constructor(props: any, states: IState) {
    super(props);
    this.state = {
      pos: new Pos(0, 0),
      isInArea: false
    };
  }

  public getPos = (e: any): void => {
    const pos: Pos = new Pos(e.clientX, e.screenY);
    this.setState({ pos, isInArea: true });
  };

  public stopTracking = (): void => {
    this.setState({ isInArea: false });
  };

  public render() {
    return (
      <div className={styles.wikiImage}>
        <div
          onMouseMove={this.getPos}
          onMouseOut={this.stopTracking}
          className={styles.thumb}
        >
          <img
            src={require("../images/keleseth.png")}
            className={styles.mini}
            alt={"mini"}
          />
        </div>
        <span
          style={{
            border: 0,
            position: "absolute",
            visibility: this.state.isInArea ? "visible" : "hidden",
            top:
              this.state.pos.y > 400
                ? this.state.pos.y - 400
                : this.state.pos.y - 150,
            left: this.state.pos.x + 20
          }}
        >
          <img
            src={require("../images/keleseth.gif")}
            className={styles.origin}
            alt={"origin"}
          />
        </span>
        <div>
          x ${this.state.pos.x} y ${this.state.pos.y}
        </div>
      </div>
    );
  }
}

export default Wikiimage;
