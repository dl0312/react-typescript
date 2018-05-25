import { convertToRaw, EditorState, RichUtils } from "draft-js";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
// import createDragNDropUploadPlugin from "draft-js-drag-n-drop-upload-plugin";

import createImagePlugin from "draft-js-image-plugin";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createResizeablePlugin from "draft-js-resizeable-plugin";

import * as React from "react";
import "react-bootstrap";
import styles from "./MyEditor.scss";
import StyleButton from "./StyleButton";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
  hashtagPlugin,
  linkifyPlugin
];

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" }
];

const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block: any) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

interface IState {
  editorState: any;
}

class MyEditor extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  public handleChange = (editorState: any) => {
    this.setState({ editorState });
  };

  public handleKeyCommend = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommend(editorState, command);
    if (newState) {
      this.handleChange(newState);
      return true;
    }
    return false;
  };

  public toggleBlockType = (blockType: any) => {
    console.log(`blocktype: ${blockType}`);
    this.handleChange(
      RichUtils.toggleBlockType(this.state.editorState, blockType)
    );
  };

  public toggleInlineStyle = (inlineStyle: any) => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  public onBoldClick = () => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
    );
  };

  public onStyleClick = (style: string): void => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, style)
    );
  };

  public render() {
    const { editorState } = this.state;
    let className: string = "RichEditor-editor";
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      console.log(className);
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== "unstyled"
      ) {
        className += " RichEditor-hidePlaceholder";
      }
    }
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    return (
      <div className={styles.myeditor}>
        <div className={styles.title}>guide editor</div>
        <div className={styles.fontStyle}>
          <BlockStyleControls
            className={styles.btnList}
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            className={styles.btnList}
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
        </div>
        <div className={styles.editor}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            handleKeyCommend={this.handleKeyCommend}
            onChange={this.handleChange}
            placeholder="Write you guide"
            spellCheck={true}
            plugins={plugins}
          />
        </div>
        <div className={styles.json}>{JSON.stringify(raw)}</div>
      </div>
    );
  }
}

const BlockStyleControls = (props: any) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  console.log(editorState);
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <button className={styles.btn}>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        </button>
      ))}
    </div>
  );
};

const InlineStyleControls = (props: any) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <button className={styles.btn}>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        </button>
      ))}
    </div>
  );
};

export default MyEditor;
