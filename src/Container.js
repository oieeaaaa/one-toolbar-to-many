import React, { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export function Container({ children, onEditorChange }) {
  const [editor] = useLexicalComposerContext();

  function onFocus(e) {
    if (!e.target) return;

    onEditorChange(editor);
  }

  useEffect(() => {
    if (!editor?.getEditorState) return;

    console.log(editor.getEditorState());

    editor.setEditorState(editor.getEditorState());
  }, [editor]);

  return (
    <div className="editor-container" onFocus={onFocus}>
      <div className="editor-inner">{children}</div>
    </div>
  );
}
