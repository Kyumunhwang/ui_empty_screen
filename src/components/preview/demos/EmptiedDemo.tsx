import { useEffect, useState } from 'react';
import { RotateCcw, ShoppingBag, Trash2 } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

const CART_ITEMS = [
  { id: 1, name: '오가닉 코튼 반팔 티셔츠', option: '화이트 / L', price: '29,000원' },
  { id: 2, name: '데일리 캔버스 에코백', option: '아이보리 / Free', price: '19,000원' },
];

export function EmptiedDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [hasUndoSnapshot, setHasUndoSnapshot] = useState(true);

  useEffect(() => {
    if (isFilled) {
      setHasUndoSnapshot(true);
    }
  }, [isFilled]);

  const handleEmptyCart = () => {
    setHasUndoSnapshot(true);
    onToggleFilled(false);
  };

  const handleUndo = () => {
    onToggleFilled(true);
  };

  return (
    <div className="flex min-h-[378px] flex-col overflow-hidden rounded-3xl bg-white shadow-xs">
      {/* Header matching empty_screen.png 07 */}
      <header className="flex items-center justify-between border-b border-[#F2F4F6] px-5 py-3.5">
        <span className="text-[14.5px] font-bold text-[#191F28]">장바구니</span>
        <button
          type="button"
          disabled={!isFilled}
          onClick={handleEmptyCart}
          className={`text-[13px] font-semibold transition ${
            isFilled
              ? 'text-[#F04452] hover:opacity-80'
              : 'cursor-default text-[#D1D6DB]'
          }`}
        >
          비우기
        </button>
      </header>

      {!isFilled ? (
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
          <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#F2F4F6] text-[#8B95A1]">
            <Trash2 className="h-5 w-5" />
          </div>
          <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
            장바구니가 비었어요
          </h3>
          <p className="mt-1.5 text-[12.5px] text-[#6B7684]">
            방금 비운 상품을 되돌리거나 새 상품을 담아 보세요
          </p>

          {hasUndoSnapshot && (
            <button
              type="button"
              onClick={handleUndo}
              className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#F2F4F6] px-4 text-[12px] font-semibold text-[#333D4B] transition hover:bg-[#E5E8EB]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              방금 비운 상품 되돌리기
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="space-y-2.5">
            {CART_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#3182F6]">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-[#191F28]">{item.name}</p>
                  <p className="text-[11.5px] text-[#6B7684]">{item.option}</p>
                </div>
                <span className="text-[13px] font-bold text-[#191F28]">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-[#F2F4F6] p-3 text-center text-[12px] text-[#4E5968]">
            오른쪽 위 <strong className="text-[#F04452]">비우기</strong>를 눌러 삭제 직후 상태를 확인해 보세요
          </div>
        </div>
      )}
    </div>
  );
}
