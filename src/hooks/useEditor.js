import { useState, useEffect } from "react";
import { EditorState, RichUtils } from "draft-js";

const calcState = (content) => {
  return content
    ? EditorState.createWithContent(content)
    : EditorState.createEmpty();
};

function useEditor(initialContent) {
  const [editorState, setEditorState] = useState(calcState(initialContent));

  useEffect(() => {
    setEditorState(calcState(initialContent));
  }, [initialContent]);

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
