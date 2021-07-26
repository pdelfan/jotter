import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const converter = {
  toContent: (editorState) => convertToRaw(editorState.getCurrentContent()),
  toEditorState: (text) => {
    return EditorState.createWithContent(convertFromRaw(text.content));
  }, 
  toActiveBlockType: (editorState) =>
    editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType(),
};

export { converter };
