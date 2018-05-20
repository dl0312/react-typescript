import * as React from "react";

interface IProps {
  key: string;
  active: boolean;
  label: string;
  onToggle: any;
  style: string;
}

class StyleButton extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public onToggle = (e: any) => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };

  public render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

export default StyleButton;
