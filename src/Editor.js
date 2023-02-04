import ExampleTheme from "./themes/ExampleTheme";
import { $getRoot, $getSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { Container } from "./Container";
import { useRef, useState } from "react";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function Editor() {
  const [editor, setEditor] = useState();

  console.log({ editor });

  return (
    <>
      <div>
        <LexicalComposer initialConfig={editorConfig}>
          <ToolbarPlugin editor={editor} />

          <LexicalComposer initialConfig={editorConfig}>
            <Container onEditorChange={setEditor}>
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <TreeViewPlugin />
              <AutoFocusPlugin />
              <CodeHighlightPlugin />
              <ListPlugin />
              <LinkPlugin />
              <AutoLinkPlugin />
              <ListMaxIndentLevelPlugin maxDepth={7} />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            </Container>
          </LexicalComposer>

          <LexicalComposer initialConfig={editorConfig}>
            <Container onEditorChange={setEditor}>
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <TreeViewPlugin />
              <AutoFocusPlugin />
              <CodeHighlightPlugin />
              <ListPlugin />
              <LinkPlugin />
              <AutoLinkPlugin />
              <ListMaxIndentLevelPlugin maxDepth={7} />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            </Container>
          </LexicalComposer>
        </LexicalComposer>
      </div>
    </>
  );
}
