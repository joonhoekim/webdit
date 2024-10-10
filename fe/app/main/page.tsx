'use client'
import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const ResizablePanels: React.FC = () => {
  return (
    <div className="h-[calc(100vh-65px)] flex flex-col scrollpanel-demo">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={10}>
          <div className="w-full h-full overflow-y-auto sticky top-0 bg-gray-100 p-4 custombar1">
            {/* 왼쪽 패널 내용 */}
            <h2 className="text-xl font-bold mb-4">왼쪽 패널</h2>
            <p>이 패널은 sticky top으로 설정되어 있습니다.</p>
            {[...Array(1000)].map((_, i) => (
              <p key={i} className="my-2">
                스크롤 테스트를 위한 콘텐츠 {i + 1}
              </p>
            ))}
          </div>
        </Panel>

        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />

        <Panel minSize={30}>
          <div className="w-full h-full overflow-y-auto p-4 custombar2">
            {/* 오른쪽 패널 내용 */}
            <h2 className="text-xl font-bold mb-4">오른쪽 패널</h2>
            <p>이 패널은 나머지 공간을 차지합니다.</p>
            {/* 스크롤 테스트를 위한 더미 콘텐츠 */}
            {[...Array(1000)].map((_, i) => (
              <p key={i} className="my-2">
                스크롤 테스트를 위한 콘텐츠 {i + 1}
              </p>
            ))}
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResizablePanels;