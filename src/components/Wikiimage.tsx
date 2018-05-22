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
    const pos: Pos = new Pos(e.clientX, e.clientY);
    this.setState({ pos, isInArea: true });
  };

  public stopTracking = (): void => {
    this.setState({ isInArea: false });
  };

  public render() {
    return (
      <div className={styles.wikiImage}>
        <div className={styles.title}>Wiki Images</div>
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
        <PopupImage isInArea={this.state.isInArea} pos={this.state.pos} />
        <div className={styles.pos}>
          x ${this.state.pos.x} y ${this.state.pos.y}
        </div>
      </div>
    );
  }
}

const PopupImage = (props: any) => {
  return (
    <span
      style={{
        border: 0,
        position: "absolute",
        visibility: props.isInArea ? "visible" : "hidden",
        top: props.pos.y - 100,
        left: props.pos.x + 20
      }}
    >
      <img
        src={require("../images/keleseth.gif")}
        className={styles.origin}
        alt={"origin"}
      />
    </span>
  );
};

export default Wikiimage;
