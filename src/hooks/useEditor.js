import { useState } from "react";
import { EditorState, RichUtils } from "draft-js";

function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function toggleBlockType(blockType) {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(style) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return {
    editorState,
    setEditorState,
    toggleBlockType,
    toggleInlineStyle,
  };
}

export { useEditor };
