import {
  Bell,
  Check,
  Folder,
  Loader2,
  Lock,
  Search,
  Trash2,
  WifiOff,
} from 'lucide-react';
import { EMPTY_STATE_PATTERNS, EmptyStateId } from '../../data/emptyStatePatterns';

interface OverviewGridProps {
  selectedId: EmptyStateId;
  onSelectPattern: (id: EmptyStateId) => void;
}

function MiniCardThumbnail({ id }: { id: EmptyStateId }) {
  switch (id) {
    case 'first-use':
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
            <Folder className="h-4 w-4" />
          </div>
          <p className="text-[11px] font-bold text-[#191F28]">마음에 드는 상품을 찜해 보세요</p>
          <p className="mt-0.5 text-[9.5px] text-[#8B95A1]">찜해 두면 할인 소식을 알려 드려요</p>
          <span className="mt-2.5 rounded-lg bg-[#3182F6] px-3 py-1 text-[10px] font-semibold text-white">
            구경하러 가기
          </span>
        </div>
      );
    case 'no-search-results':
      return (
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center gap-1.5 rounded-lg border border-[#3182F6] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#191F28]">
            <Search className="h-3 w-3 text-[#8B95A1]" />
            <span>무선 이어폰 라벤더</span>
            <span className="h-3 w-[1.5px] bg-[#3182F6]" />
          </div>
          <div className="my-auto flex flex-col items-center text-center">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E8EB]/80 text-[#8B95A1]">
              <Search className="h-3.5 w-3.5" />
            </div>
            <p className="text-[11px] font-bold text-[#191F28]">검색 결과가 없어요</p>
            <p className="mt-0.5 text-[9.5px] text-[#8B95A1]">검색어를 바꿔 다시 찾아 보세요</p>
          </div>
        </div>
      );
    case 'no-filter-results':
      return (
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-wrap justify-center gap-1">
            {['오늘도착', '무료배송', '특가'].map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[#191F28] px-2 py-0.5 text-[9px] font-semibold text-white"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="my-auto flex flex-col items-center text-center">
            <p className="text-[11px] font-bold text-[#191F28]">조건에 맞는 상품이 없어요</p>
            <span className="mt-2.5 rounded-lg border border-[#3182F6] bg-white px-3 py-1 text-[10px] font-semibold text-[#3182F6]">
              필터 초기화
            </span>
          </div>
        </div>
      );
    case 'offline':
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFEFEF] text-[#F04452]">
            <WifiOff className="h-4 w-4" />
          </div>
          <p className="text-[11px] font-bold text-[#191F28]">인터넷 연결이 끊겼어요</p>
          <p className="mt-0.5 text-[9.5px] text-[#8B95A1]">연결되면 장바구니를 다시 불러와요</p>
          <span className="mt-2.5 inline-flex items-center justify-center rounded-lg bg-[#E5E8EB]/80 px-5 py-1 text-[#4E5968]">
            <Loader2 className="h-3.5 w-3.5" />
          </span>
        </div>
      );
    case 'permission-needed':
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
            <Bell className="h-4 w-4" />
          </div>
          <p className="text-[11px] font-bold text-[#191F28]">배송이 출발하면 알려 드릴게요</p>
          <p className="mt-0.5 text-[9.5px] text-[#8B95A1]">알림을 켰어요</p>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="text-[10px] font-semibold text-[#333D4B]">알림 허용</span>
            <span className="inline-flex h-4 w-7 items-center justify-end rounded-full bg-[#3182F6] p-0.5">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
          </div>
        </div>
      );
    case 'all-caught-up':
      return (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#00C471] text-white">
            <Check className="h-4 w-4" strokeWidth={2.8} />
          </div>
          <p className="text-[11px] font-bold text-[#191F28]">오늘 미션을 다 끝냈어요</p>
          <p className="mt-0.5 text-[9.5px] text-[#8B95A1]">내일 새 미션이 열려요</p>
        </div>
      );
    case 'emptied':
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between text-[9.5px]">
            <span className="font-bold text-[#191F28]">장바구니</span>
            <span className="font-semibold text-[#F04452]">비우기</span>
          </div>
          <div className="my-auto flex flex-col items-center text-center">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E8EB]/80 text-[#8B95A1]">
              <Trash2 className="h-3.5 w-3.5" />
            </div>
            <p className="text-[11px] font-bold text-[#191F28]">장바구니가 비었어요</p>
          </div>
        </div>
      );
    case 'error-state':
      return (
        <div className="flex h-full flex-col justify-center space-y-2 px-1">
          <div className="h-2.5 w-2/3 rounded-full bg-[#333D4B]" />
          <div className="h-2 w-full rounded-full bg-[#D1D6DB]" />
          <div className="h-2 w-5/6 rounded-full bg-[#E5E8EB]" />
          <div className="h-2 w-4/5 rounded-full bg-[#E5E8EB]" />
          <div className="pt-1 text-center">
            <span className="text-[9.5px] font-semibold text-[#F04452]">
              불러오기 실패 · 재시도 필요
            </span>
          </div>
        </div>
      );
    case 'locked-content':
      return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-2 space-y-2 opacity-40 blur-[2px]">
            <div className="h-2.5 w-3/4 rounded-full bg-[#8B95A1]" />
            <div className="h-2 w-full rounded-full bg-[#B0B8C1]" />
            <div className="h-2 w-5/6 rounded-full bg-[#B0B8C1]" />
            <div className="h-2 w-2/3 rounded-full bg-[#B0B8C1]" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#191F28] text-white">
              <Lock className="h-3.5 w-3.5" />
            </div>
            <p className="text-[11px] font-bold text-[#191F28]">멤버십 회원만 볼 수 있어요</p>
            <span className="mt-2 rounded-lg bg-[#3182F6] px-3 py-1 text-[10px] font-semibold text-white">
              열어보기
            </span>
          </div>
        </div>
      );
  }
}

export function OverviewGrid({ selectedId, onSelectPattern }: OverviewGridProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#E8F3FF] px-3 py-1 text-[12px] font-bold text-[#3182F6]">
            전체 패턴 9종 한눈에 보기
          </span>
          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.02em] text-[#191F28]">
            상황별 Empty State UI/UX 카탈로그
          </h2>
          <p className="mt-1 text-[14px] text-[#6B7684]">
            카드를 클릭하면 인터랙티브 데모와 실무 복사용 코드를 바로 확인할 수 있어요.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {EMPTY_STATE_PATTERNS.map((pattern) => {
          const isSelected = pattern.id === selectedId;
          return (
            <button
              key={pattern.id}
              type="button"
              onClick={() => onSelectPattern(pattern.id)}
              className={`group flex flex-col rounded-[24px] bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(25,31,40,0.08)] ${
                isSelected
                  ? 'ring-2 ring-[#3182F6] shadow-[0_8px_24px_rgba(49,130,246,0.14)]'
                  : 'ring-1 ring-[#E5E8EB]/80 shadow-[0_2px_8px_rgba(25,31,40,0.03)]'
              }`}
            >
              <div className="h-[196px] w-full rounded-2xl bg-[#F7F8FA] p-4 transition group-hover:bg-[#F2F4F6]">
                <MiniCardThumbnail id={pattern.id} />
              </div>

              <div className="mt-3.5 px-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-[16px] font-bold text-[#3182F6]">{pattern.number}</span>
                  <h3
                    className={`text-[18px] font-bold tracking-[-0.02em] ${
                      isSelected ? 'text-[#3182F6]' : 'text-[#191F28]'
                    }`}
                  >
                    {pattern.titleKo}
                  </h3>
                </div>
                <p className="mt-0.5 text-[13px] font-medium text-[#6B7684]">{pattern.titleEn}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
