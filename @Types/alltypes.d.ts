declare module "react-router-dom";
declare module "react-ionicons";
declare module "react-summernote";
declare module "bootstrap";
declare module "axios";

declare module "draft-js";
declare module "draft-js-plugins-editor";
declare module "draft-js-image-plugin";
declare module "draft-js-alignment-plugin";
declare module "draft-js-focus-plugin";
declare module "draft-js-resizeable-plugin";
declare module "draft-js-drag-n-drop-plugin";
declare module "draft-js-drag-n-drop-upload-plugin";
declare module "draft-js-hashtag-plugin";
declare module "draft-js-linkify-plugin";

declare module "react-sortable-tree";
declare module "react-sortable-tree-theme-full-node-drag";
declare module "react-draft-wysiwyg" {
  import * as React from "react";

  type DraftInlineStyle = Set<String>;
  type DraftDecoratorType = any;
  type List = any[];
  type EditorStateCreationConfig = any;
  type EditorChangeType = any;
  type EditorStateRecordType = any;
  type BlockMap = any;
  type Stack<T> = Array<T>;
  type OrderedMap<K, S> = Map<K, S>;
  class ContentState {}

  class SelectionState {}

  /**
   * EditorState is the top-level state object for the editor.
   * It is an Immutable @Record that represents the entire state of a Draft editor
   *
   * @class EditorState
   */
  class EditorState {
    static createEmpty(decorator?: any): EditorState;
    static createWithContent(
      contentState: ContentState,
      decorator?: DraftDecoratorType
    ): EditorState;
    static create(config: EditorStateCreationConfig): EditorState;
    static push(
      editorState: EditorState,
      contentState: ContentState,
      changeType: EditorChangeType
    ): EditorState;
    static undo(editorState: EditorState): EditorState;
    static redo(editorState: EditorState): EditorState;
    static acceptSelection(
      editorState: EditorState,
      selectionState: SelectionState
    ): EditorState;
    static forceSelection(
      editorState: EditorState,
      selectionState: SelectionState
    ): EditorState;
    static moveSelectionToEnd(editorState: EditorState): EditorState;
    static moveFocusToEnd(editorState: EditorState): EditorState;
    static setInlineStyleOverride(
      editorState: EditorState,
      inlineStyleOverride: DraftInlineStyle
    ): EditorState;
    static set(
      editorState: EditorState,
      options: EditorStateRecordType
    ): EditorState;

    getCurrentContent(): ContentState;
    getSelection(): SelectionState;
    getCurrentInlineStyle(): DraftInlineStyle;
    getBlockTree(blockKey: string): List;
    getAllowUndo(): boolean;
    getDecorator(): DraftDecoratorType | undefined;
    getDirectionMap(): BlockMap;
    mustForceSelection(): boolean;
    isInCompositionMode(): boolean;
    getInlineStyleOverride(): DraftInlineStyle;
    getLastChangeType(): EditorChangeType;
    getNativelyRenderedContent(): ContentState | undefined;
    getRedoStack(): Stack<ContentState>;
    getSelection(): SelectionState;
    getUndoStack(): Stack<ContentState>;
    treeMap: OrderedMap<string, List>;
  }

  interface IWysiwygEditorProps {
    onChange?: (editorState: any) => void;
    onEditorStateChange?: (editorState: any) => void;
    onContentStateChange?: (editorState: any) => void;
    defaultContentState?: any;
    contentState?: any;
    editorState?: any;
    defaultEditorState?: any;
    toolbarOnFocus?: boolean;
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    toolbar?: any;
    toolbarCustomButtons?: any[];
    toolbarClassName?: string;
    toolbarHidden?: boolean;
    locale?: string;
    localization?: any;
    editorClassName?: string;
    wrapperClassName?: string;
    toolbarStyle?: React.CSSProperties;
    editorStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    uploadCallback?: (upload: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    onTab?: (event: any) => void;
    mention?: any;
    hashtag?: any;
    textAlignment?: string;
    readOnly?: boolean;
    tabIndex?: number;
    placeholder?: string;
    ariaLabel?: string;
    ariaOwneeID?: string;
    ariaActiveDescendantID?: string;
    ariaAutoComplete?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: string;
    ariaHasPopup?: string;
    customBlockRenderFunc?: (e: any) => void;
    wrapperId?: number;
    customDecorators?: any[];
  }

  export class Editor extends React.Component<IWysiwygEditorProps> {}
}
declare module "*.scss" {
  const content: any;
  export default content;
}
