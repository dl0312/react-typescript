import * as React from "react";

export interface IMyClassProps {
  name: string;
  isMarried: boolean;
}

class MyClass extends React.Component<IMyClassProps> {
  public static defaultProps: Partial<IMyClassProps> = {};
  public render() {
    return (
      <div>
        <h1>
          {this.props.name} is{" "}
          {this.props.isMarried ? "Married" : "not Married"}
        </h1>
      </div>
    );
  }
}

export default MyClass;
