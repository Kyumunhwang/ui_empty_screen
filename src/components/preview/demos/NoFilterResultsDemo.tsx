import { useEffect, useState } from 'react';
import { PackageCheck, RotateCcw, X } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

const ALL_FILTERS = ['오늘도착', '무료배송', '특가'] as const;

const PRODUCTS = [
  { id: 1, name: '미니 가습기 500ml', price: '29,900원', tags: ['오늘도착', '무료배송'] },
  { id: 2, name: '접이식 노트북 거치대', price: '19,800원', tags: ['무료배송'] },
  { id: 3, name: '고속 무선 충전 패드', price: '24,500원', tags: ['특가'] },
];

export function NoFilterResultsDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>(
    isFilled ? [] : [...ALL_FILTERS]
  );

  useEffect(() => {
    setActiveFilters(isFilled ? [] : [...ALL_FILTERS]);
  }, [isFilled]);

  const filteredProducts = PRODUCTS.filter((p) =>
    activeFilters.every((f) => p.tags.includes(f))
  );

  const toggleFilter = (filter: string) => {
    const next = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];
    setActiveFilters(next);
    const hasResults = PRODUCTS.some((p) => next.every((f) => p.tags.includes(f)));
    if (hasResults !== isFilled) {
      onToggleFilled(hasResults);
    }
  };

  const resetFilters = () => {
    setActiveFilters([]);
    onToggleFilled(true);
  };

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-4 shadow-xs">
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-1.5">
        {ALL_FILTERS.map((filter) => {
          const active = activeFilters.includes(filter);
          return (
            <button
              key={filter}
              type="button"
              onClick={() => toggleFilter(filter)}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${
                active
                  ? 'bg-[#191F28] text-white'
                  : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]'
              }`}
            >
              <span>{filter}</span>
              {active && <X className="h-3 w-3 opacity-80" />}
            </button>
          );
        })}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
          <h3 className="text-[16.5px] font-bold tracking-[-0.02em] text-[#191F28]">
            조건에 맞는 상품이 없어요
          </h3>
          <p className="mt-1.5 text-[12.5px] text-[#6B7684]">
            선택한 필터를 일부 해제해 보세요
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#3182F6] bg-white px-5 text-[13px] font-semibold text-[#3182F6] transition hover:bg-[#E8F3FF] active:scale-[0.98]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            필터 초기화
          </button>
        </div>
      ) : (
        <div className="mt-4 flex-1 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[12px] font-semibold text-[#6B7684]">
              조건 충족 상품 <strong className="text-[#3182F6]">{filteredProducts.length}</strong>개
            </span>
            <button
              type="button"
              onClick={() => {
                setActiveFilters([...ALL_FILTERS]);
                onToggleFilled(false);
              }}
              className="text-[11.5px] font-semibold text-[#8B95A1] hover:text-[#3182F6]"
            >
              전체 필터 켜기
            </button>
          </div>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#3182F6]">
                <PackageCheck className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-[#191F28]">{product.name}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[12.5px] font-bold text-[#191F28]">{product.price}</span>
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#E8F3FF] px-1.5 py-0.5 text-[10px] font-semibold text-[#3182F6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
