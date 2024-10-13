'use client'
import EditorApplication from '@/components/editor/EditorApplication';
import Tree from '@/components/tree';
import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const ResizablePanels: React.FC = () => {
  return (
    <div className="content-height flex flex-col scrollpanel-demo">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={10}>
          <div className="w-full h-full overflow-y-auto sticky top-0 bg-gray-100 p-4 custombar1">
            {/* 왼쪽 패널 내용 */}
            <h2 className="text-xl font-bold mb-4">왼쪽 패널</h2>
            <p>이 패널은 sticky top으로 설정되어 있습니다.</p>
            {/* Tree Component */}
            <Tree />
          </div>
        </Panel>

        <PanelResizeHandle className="w-4 bg-gray-200 hover:bg-gray-300 transition-colors" />

        <Panel minSize={30}>
          <div className="w-full h-full">
            {/* Editor 컴포넌트 */}
            <EditorApplication />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResizablePanels;