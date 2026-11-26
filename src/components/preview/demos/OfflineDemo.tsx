import { useState } from 'react';
import { Loader2, ShoppingCart, Wifi, WifiOff } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

export function OfflineDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [isReconnecting, setIsReconnecting] = useState(false);

  const handleRetry = () => {
    setIsReconnecting(true);
    window.setTimeout(() => {
      setIsReconnecting(false);
      onToggleFilled(true);
    }, 900);
  };

  if (!isFilled) {
    return (
      <div className="flex min-h-[378px] flex-col items-center justify-center rounded-3xl bg-white px-5 py-10 text-center shadow-xs">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F1] text-[#F04452]">
          <WifiOff className="h-6 w-6" strokeWidth={2} />
        </div>

        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          인터넷 연결이 끊겼어요
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#6B7684]">
          연결되면 장바구니를 다시 불러와요
        </p>

        <button
          type="button"
          onClick={handleRetry}
          disabled={isReconnecting}
          className="mt-6 inline-flex h-10 min-w-[126px] items-center justify-center gap-2 rounded-xl bg-[#F2F4F6] px-4 text-[13px] font-semibold text-[#333D4B] transition hover:bg-[#E5E8EB] disabled:opacity-75"
        >
          <Loader2
            className={`h-4 w-4 ${isReconnecting ? 'animate-spin text-[#3182F6]' : 'text-[#6B7684]'}`}
          />
          {isReconnecting ? '다시 연결 중...' : '연결 다시 시도'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-[#E8F3FF] px-3.5 py-2.5 text-[#3182F6]">
        <div className="flex items-center gap-2 text-[12px] font-semibold">
          <Wifi className="h-4 w-4" />
          <span>온라인 연결 복구됨</span>
        </div>
        <button
          type="button"
          onClick={() => onToggleFilled(false)}
          className="rounded-lg bg-white px-2 py-1 text-[11px] font-semibold text-[#4E5968] shadow-2xs hover:text-[#F04452]"
        >
          오프라인 테스트
        </button>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#3182F6] shadow-2xs">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-[#191F28]">프리미엄 원두 1kg</p>
            <p className="text-[12px] text-[#6B7684]">수량 1개 · 내일 새벽도착</p>
          </div>
          <span className="text-[13.5px] font-bold text-[#191F28]">24,000원</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-[#F9FAFB] p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#3182F6] shadow-2xs">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-[#191F28]">스테인리스 텀블러</p>
            <p className="text-[12px] text-[#6B7684]">수량 1개 · 무료배송</p>
          </div>
          <span className="text-[13.5px] font-bold text-[#191F28]">18,500원</span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between rounded-2xl bg-[#3182F6] px-4 py-3 text-white">
          <span className="text-[13px] font-semibold">총 2건 주문하기</span>
          <span className="text-[14px] font-bold">42,500원</span>
        </div>
      </div>
    </div>
  );
}
