import { LayoutGrid, Sparkles } from 'lucide-react';
import { EMPTY_STATE_PATTERNS, EmptyStateId } from '../../data/emptyStatePatterns';

interface SidebarProps {
  selectedId: EmptyStateId;
  isOverview: boolean;
  onSelectPattern: (id: EmptyStateId) => void;
  onSelectOverview: () => void;
}

export function Sidebar({
  selectedId,
  isOverview,
  onSelectPattern,
  onSelectOverview,
}: SidebarProps) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#E5E8EB] bg-white lg:h-screen lg:w-[272px] lg:border-b-0 lg:border-r">
      {/* Brand Header */}
      <div className="flex items-center justify-between border-b border-[#F2F4F6] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3182F6] text-white shadow-sm shadow-[#3182F6]/25">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-[15px] font-bold tracking-[-0.02em] text-[#191F28]">
              Empty States
            </h1>
            <p className="text-[11px] font-medium text-[#8B95A1]">
              한국형 UI/UX 패턴 9종
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[#E8F3FF] px-2.5 py-0.5 text-[11px] font-bold text-[#3182F6]">
          v1.0
        </span>
      </div>

      {/* Overview Toggle */}
      <div className="px-3 pt-3 pb-2">
        <button
          type="button"
          onClick={onSelectOverview}
          className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-[13px] font-semibold transition ${
            isOverview
              ? 'bg-[#191F28] text-white shadow-sm'
              : 'bg-[#F2F4F6] text-[#333D4B] hover:bg-[#E5E8EB]'
          }`}
        >
          <LayoutGrid className="h-4 w-4 shrink-0" />
          <span className="flex-1">전체 한눈에 보기</span>
          <span
            className={`rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
              isOverview ? 'bg-white/15 text-white' : 'bg-white text-[#6B7684]'
            }`}
          >
            9
          </span>
        </button>
      </div>

      {/* Pattern List */}
      <nav
        aria-label="빈 화면 패턴 목록"
        className="flex gap-1.5 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-hidden lg:py-1"
      >
        <div className="hidden px-2 py-1.5 text-[11px] font-semibold tracking-wide text-[#8B95A1] lg:block">
          패턴 라이브러리 (01 ~ 09)
        </div>

        {EMPTY_STATE_PATTERNS.map((pattern) => {
          const isActive = !isOverview && selectedId === pattern.id;

          return (
            <button
              key={pattern.id}
              type="button"
              onClick={() => onSelectPattern(pattern.id)}
              className={`group flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition lg:w-full ${
                isActive
                  ? 'bg-[#E8F3FF] text-[#3182F6]'
                  : 'text-[#333D4B] hover:bg-[#F9FAFB]'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold transition ${
                  isActive
                    ? 'bg-[#3182F6] text-white'
                    : 'bg-[#F2F4F6] text-[#3182F6] group-hover:bg-[#E8F3FF]'
                }`}
              >
                {pattern.number}
              </span>

              <div className="min-w-0 flex-1">
                <div
                  className={`truncate text-[13.5px] font-bold tracking-[-0.01em] ${
                    isActive ? 'text-[#3182F6]' : 'text-[#191F28]'
                  }`}
                >
                  {pattern.titleKo}
                </div>
                <div className="truncate text-[11px] font-medium text-[#8B95A1]">
                  {pattern.titleEn}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer note */}
      <div className="hidden border-t border-[#F2F4F6] px-4 py-3 text-[11px] leading-relaxed text-[#8B95A1] lg:block">
        프리뷰에서 직접 버튼을 눌러
        <br />
        <span className="font-semibold text-[#4E5968]">빈 화면 ↔ 데이터 상태</span> 전환을 체험해 보세요.
      </div>
    </aside>
  );
}
