"use client";
import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

const editorConfig = {
  // The editor theme
  theme: {
    // ...
  },
  // Handling of errors during update

  // Any custom nodes go here
  //   nodes: [
  //     HeadingNode,
  //     ListNode,
  //     ListItemNode,
  //     QuoteNode,
  //     CodeNode,
  //     CodeHighlightNode,
  //     TableNode,
  //     TableCellNode,
  //     TableRowNode,
  //     AutoLinkNode,
  //     LinkNode,
  //   ],
};

export default function LexicalTextEditor() {
  const [rich, setRich] = useState(true);
  const onError = (error) => {
    throw error;
  };
  const onChange = (editorState, editor) => {
    editorState.read(() => {
      // Print the contents of the EditorState instance to your console.
      const content = editor.getEditorState().toJSON();
      console.log(content);
    });
  };

  const initialConfig = {
    namespace: "MyEditor",
    // theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
      ...
    </LexicalComposer>
  );
}
