import * as React from "react";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-full-node-drag";

import "react-sortable-tree/style.css";

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

interface IState {
  treeData: object[];
}

class Wikihierarchy extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      treeData: [
        {
          title: "Chicken",
          children: [
            {
              title: "Egg"
            }
          ]
        }
      ]
    };
  }

  public handleChange = (treeData: object[]): void => {
    this.setState({ treeData });
  };

  public render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={this.handleChange}
          theme={FileExplorerTheme}
        />
      </div>
    );
  }
}

export default Wikihierarchy;
