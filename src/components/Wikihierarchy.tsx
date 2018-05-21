import * as React from "react";
import styles from "./Wikihierarchy.scss";

// class Element {
//   public name: string;
//   public depth: number;
//   public parent?: Element;
//   constructor(name: string, depth: number, parent?: Element) {
//     this.name = name;
//     this.depth = depth;
//     this.parent = parent;
//   }
// }

// const game: Element = new Element("Game", 0);
// const leagueoflegend: Element = new Element("League of Legend", 1, game);
// const champion: Element = new Element("Champion", 2, leagueoflegend);
// const mondo: Element = new Element("Mondo", 3, champion);
// const jax: Element = new Element("Jax", 3, champion);

// let hierarchy: Element[] = [game];
// const createNewElement = (
//   name: string,
//   depth: number,
//   parent?: Element
// ): Element => {
//   const newElement: Element = new Element(name, depth, parent);
//   hierarchy.push(newElement);
//   return newElement;
// };

class Wikihierarchy extends React.Component<{}> {
  public render() {
    return (
      <div className={styles.hierarchy}>
        <ul>
          <li>
            <ul>league of legend</ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Wikihierarchy;
