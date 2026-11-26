import { useMemo, useState } from 'react';
import { CheckCircle2, LayoutGrid, ShieldAlert, Sparkles } from 'lucide-react';
import { Sidebar } from './components/layout/Sidebar';
import { DeviceFrame } from './components/preview/DeviceFrame';
import { OverviewGrid } from './components/preview/OverviewGrid';
import { CodeViewer } from './components/code/CodeViewer';
import { FirstUseDemo } from './components/preview/demos/FirstUseDemo';
import { NoSearchResultsDemo } from './components/preview/demos/NoSearchResultsDemo';
import { NoFilterResultsDemo } from './components/preview/demos/NoFilterResultsDemo';
import { OfflineDemo } from './components/preview/demos/OfflineDemo';
import { PermissionNeededDemo } from './components/preview/demos/PermissionNeededDemo';
import { AllCaughtUpDemo } from './components/preview/demos/AllCaughtUpDemo';
import { EmptiedDemo } from './components/preview/demos/EmptiedDemo';
import { ErrorStateDemo } from './components/preview/demos/ErrorStateDemo';
import { LockedContentDemo } from './components/preview/demos/LockedContentDemo';
import { EMPTY_STATE_PATTERNS, EmptyStateId } from './data/emptyStatePatterns';

export function App() {
  const [selectedId, setSelectedId] = useState<EmptyStateId>('no-search-results');
  const [isOverview, setIsOverview] = useState<boolean>(false);
  const [filledMap, setFilledMap] = useState<Record<EmptyStateId, boolean>>({
    'first-use': false,
    'no-search-results': false,
    'no-filter-results': false,
    offline: false,
    'permission-needed': false,
    'all-caught-up': false,
    emptied: false,
    'error-state': false,
    'locked-content': false,
  });
  const [resetSeed, setResetSeed] = useState(0);

  const selectedPattern = useMemo(
    () => EMPTY_STATE_PATTERNS.find((p) => p.id === selectedId) ?? EMPTY_STATE_PATTERNS[0],
    [selectedId]
  );

  const isFilled = filledMap[selectedId];

  const handleToggleFilled = (filled: boolean) => {
    setFilledMap((prev) => ({ ...prev, [selectedId]: filled }));
  };

  const handleResetDemo = () => {
    setFilledMap((prev) => ({ ...prev, [selectedId]: false }));
    setResetSeed((prev) => prev + 1);
  };

  const handleSelectPattern = (id: EmptyStateId) => {
    setSelectedId(id);
    setIsOverview(false);
  };

  const renderDemo = () => {
    const props = {
      isFilled,
      onToggleFilled: handleToggleFilled,
    };

    switch (selectedId) {
      case 'first-use':
        return <FirstUseDemo key={`first-${resetSeed}`} {...props} />;
      case 'no-search-results':
        return <NoSearchResultsDemo key={`search-${resetSeed}`} {...props} />;
      case 'no-filter-results':
        return <NoFilterResultsDemo key={`filter-${resetSeed}`} {...props} />;
      case 'offline':
        return <OfflineDemo key={`offline-${resetSeed}`} {...props} />;
      case 'permission-needed':
        return <PermissionNeededDemo key={`perm-${resetSeed}`} {...props} />;
      case 'all-caught-up':
        return <AllCaughtUpDemo key={`caught-${resetSeed}`} {...props} />;
      case 'emptied':
        return <EmptiedDemo key={`emptied-${resetSeed}`} {...props} />;
      case 'error-state':
        return <ErrorStateDemo key={`error-${resetSeed}`} {...props} />;
      case 'locked-content':
        return <LockedContentDemo key={`locked-${resetSeed}`} {...props} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F2F4F6] text-[#191F28] lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* Column 1: Left Fixed Navigation Sidebar */}
      <Sidebar
        selectedId={selectedId}
        isOverview={isOverview}
        onSelectPattern={handleSelectPattern}
        onSelectOverview={() => setIsOverview(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7">
        {isOverview ? (
          <OverviewGrid
            selectedId={selectedId}
            onSelectPattern={handleSelectPattern}
          />
        ) : (
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(440px,520px)]">
            {/* Column 2: Live Interactive Preview + UX Spec */}
            <div className="flex flex-col gap-5">
              {/* Pattern Header */}
              <div className="rounded-[24px] border border-[#E5E8EB] bg-white p-5 shadow-[0_2px_10px_rgba(25,31,40,0.03)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 items-center rounded-xl bg-[#E8F3FF] px-3 text-[13px] font-bold text-[#3182F6]">
                      {selectedPattern.number} · {selectedPattern.category}
                    </span>
                    <span className="text-[12.5px] font-medium text-[#8B95A1]">
                      {selectedPattern.titleEn}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOverview(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#F2F4F6] px-3 py-1.5 text-[12px] font-semibold text-[#4E5968] transition hover:bg-[#E5E8EB] hover:text-[#191F28]"
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    9개 전체 보기
                  </button>
                </div>

                <h2 className="mt-3 text-[22px] font-bold tracking-[-0.02em] text-[#191F28]">
                  {selectedPattern.titleKo}
                </h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[#4E5968]">
                  {selectedPattern.summary}
                </p>
              </div>

              {/* Interactive Device Frame */}
              <DeviceFrame
                number={selectedPattern.number}
                titleKo={selectedPattern.titleKo}
                titleEn={selectedPattern.titleEn}
                isFilled={isFilled}
                onToggleFilled={handleToggleFilled}
                onReset={handleResetDemo}
              >
                {renderDemo()}
              </DeviceFrame>

              {/* UX Guideline Cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[20px] border border-[#E5E8EB] bg-white p-4">
                  <div className="mb-2.5 flex items-center gap-1.5 text-[13px] font-bold text-[#00A862]">
                    <CheckCircle2 className="h-4 w-4" />
                    권장 패턴 (Do)
                  </div>
                  <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-[#4E5968]">
                    {selectedPattern.uxGuidelines.doList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C471]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[20px] border border-[#E5E8EB] bg-white p-4">
                  <div className="mb-2.5 flex items-center gap-1.5 text-[13px] font-bold text-[#F04452]">
                    <ShieldAlert className="h-4 w-4" />
                    지양 패턴 (Don&apos;t)
                  </div>
                  <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-[#4E5968]">
                    {selectedPattern.uxGuidelines.dontList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F04452]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trigger Condition & Anatomy */}
              <div className="rounded-[20px] border border-[#E5E8EB] bg-white p-4">
                <div className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-[#191F28]">
                  <Sparkles className="h-4 w-4 text-[#3182F6]" />
                  노출 조건 & 화면 구성 요소
                </div>
                <p className="rounded-xl bg-[#F9FAFB] px-3 py-2 font-mono text-[12px] text-[#333D4B]">
                  {selectedPattern.uxGuidelines.triggerCondition}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selectedPattern.uxGuidelines.anatomy.map((part) => (
                    <span
                      key={part}
                      className="rounded-full bg-[#F2F4F6] px-3 py-1 text-[11.5px] font-semibold text-[#4E5968]"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Code Viewer & Copywriting Principles */}
            <CodeViewer pattern={selectedPattern} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
