/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use client'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import type { Klass, LexicalNode } from 'lexical';
import { ExcalidrawNode } from './nodes/ExcalidrawNode';
import ExcalidrawPlugin from './plugins/ExcalidrawPlugin';

import ExampleTheme from './ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';

import './EditorStyles.css';

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
  ExcalidrawNode,
];

const placeholder = 'Enter some rich text...';

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [...PlaygroundNodes],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ExampleTheme,
};

export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="editor-placeholder">{placeholder}</div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
        <TreeViewPlugin />
        <ExcalidrawPlugin />
      </div>
    </LexicalComposer>
  );
}
