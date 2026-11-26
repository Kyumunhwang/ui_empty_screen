import { useEffect, useState } from 'react';
import { Headphones, Search, X } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

const CATALOG = [
  { id: 1, title: '무선 이어폰 프로 화이트', price: '189,000원', badge: '로켓배송' },
  { id: 2, title: '무선 이어폰 노이즈 캔슬링 블랙', price: '229,000원', badge: '무료배송' },
  { id: 3, title: '블루투스 오픈형 이어폰', price: '99,000원', badge: '특가' },
];

const SUGGESTIONS = ['무선 이어폰', '노이즈 캔슬링', '블루투스'];

export function NoSearchResultsDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [query, setQuery] = useState(isFilled ? '무선 이어폰' : '무선 이어폰 라벤더');

  useEffect(() => {
    setQuery(isFilled ? '무선 이어폰' : '무선 이어폰 라벤더');
  }, [isFilled]);

  const normalized = query.trim().toLowerCase();
  const matched =
    normalized.length === 0
      ? CATALOG
      : CATALOG.filter((item) => item.title.toLowerCase().includes(normalized));

  const handleQueryChange = (next: string) => {
    setQuery(next);
    const nextMatches = CATALOG.some((item) =>
      item.title.toLowerCase().includes(next.trim().toLowerCase())
    );
    if (nextMatches !== isFilled) {
      onToggleFilled(nextMatches);
    }
  };

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-4 shadow-xs">
      {/* Search Bar */}
      <div className="flex items-center gap-2 rounded-xl border-[1.5px] border-[#3182F6] bg-[#F9FAFB] px-3 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-[#8B95A1]" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="상품을 검색해 보세요"
          className="w-full bg-transparent text-[13.5px] font-medium text-[#191F28] outline-none placeholder:text-[#8B95A1]"
        />
        {query && (
          <button
            type="button"
            onClick={() => handleQueryChange('')}
            aria-label="검색어 지우기"
            className="rounded-full p-1 text-[#8B95A1] transition hover:bg-[#E5E8EB] hover:text-[#191F28]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {matched.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F4F6] text-[#8B95A1]">
            <Search className="h-5 w-5" />
          </div>
          <h3 className="text-[16.5px] font-bold tracking-[-0.02em] text-[#191F28]">
            검색 결과가 없어요
          </h3>
          <p className="mt-1 text-[13px] text-[#6B7684]">
            검색어를 바꿔 다시 찾아 보세요
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {SUGGESTIONS.map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => handleQueryChange(keyword)}
                className="rounded-full bg-[#F2F4F6] px-3 py-1.5 text-[11.5px] font-semibold text-[#4E5968] transition hover:bg-[#E8F3FF] hover:text-[#3182F6]"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-1 flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[12px] font-semibold text-[#6B7684]">
                검색 결과 <strong className="text-[#3182F6]">{matched.length}</strong>건
              </span>
              <button
                type="button"
                onClick={() => handleQueryChange('무선 이어폰 라벤더')}
                className="text-[11.5px] font-semibold text-[#8B95A1] hover:text-[#3182F6]"
              >
                결과 없는 검색어 테스트
              </button>
            </div>
            {matched.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#3182F6]">
                  <Headphones className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-[#191F28]">{item.title}</p>
                  <p className="text-[12.5px] font-bold text-[#191F28]">{item.price}</p>
                </div>
                <span className="rounded-md bg-white px-2 py-1 text-[10.5px] font-semibold text-[#4E5968] shadow-2xs">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
