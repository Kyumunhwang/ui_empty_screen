import { FolderHeart, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export interface DemoProps {
  isFilled: boolean;
  onToggleFilled: (filled: boolean) => void;
}

const SAMPLE_WISHLIST = [
  { id: 1, name: '소니 WH-1000XM5 무선 헤드폰', price: '389,000원', discount: '18% 할인 중' },
  { id: 2, name: '애플 에어팟 프로 2세대', price: '315,000원', discount: '카드 즉시할인' },
  { id: 3, name: '로지텍 MX Master 3S 마우스', price: '129,000원', discount: '오늘도착' },
];

export function FirstUseDemo({ isFilled, onToggleFilled }: DemoProps) {
  if (!isFilled) {
    return (
      <div className="flex min-h-[378px] flex-col items-center justify-center rounded-3xl bg-white px-5 py-10 text-center shadow-xs">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
          <FolderHeart className="h-7 w-7" strokeWidth={1.9} />
        </div>

        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          마음에 드는 상품을 찜해 보세요
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#6B7684]">
          찜해 두면 할인 소식을 알려 드려요
        </p>

        <button
          type="button"
          onClick={() => onToggleFilled(true)}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-xl bg-[#3182F6] px-5 text-[13.5px] font-semibold text-white transition hover:bg-[#1B64DA] active:scale-[0.98]"
        >
          구경하러 가기
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between px-1">
        <div>
          <h4 className="text-[15px] font-bold text-[#191F28]">찜한 상품 3</h4>
          <p className="text-[11.5px] text-[#3182F6]">가격이 내려가면 바로 알려 드릴게요</p>
        </div>
        <button
          type="button"
          onClick={() => onToggleFilled(false)}
          className="inline-flex items-center gap-1 rounded-lg bg-[#F2F4F6] px-2.5 py-1.5 text-[11.5px] font-semibold text-[#6B7684] transition hover:bg-[#E5E8EB]"
        >
          <Trash2 className="h-3 w-3" />
          비우기
        </button>
      </div>

      <div className="space-y-2.5">
        {SAMPLE_WISHLIST.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3 transition hover:bg-[#F2F4F6]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#3182F6]">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-[#191F28]">{item.name}</p>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="text-[13px] font-bold text-[#191F28]">{item.price}</span>
                <span className="rounded-md bg-[#E8F3FF] px-1.5 py-0.5 text-[10px] font-bold text-[#3182F6]">
                  {item.discount}
                </span>
              </div>
            </div>
            <Heart className="h-4 w-4 shrink-0 fill-[#F04452] text-[#F04452]" />
          </div>
        ))}
      </div>
    </div>
  );
}
