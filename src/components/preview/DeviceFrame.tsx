import { ReactNode, useState } from 'react';
import { Monitor, RotateCcw, Smartphone, Wifi } from 'lucide-react';

interface DeviceFrameProps {
  titleKo: string;
  titleEn: string;
  number: string;
  isFilled: boolean;
  onToggleFilled: (filled: boolean) => void;
  onReset: () => void;
  children: ReactNode;
}

export function DeviceFrame({
  titleKo,
  titleEn,
  number,
  isFilled,
  onToggleFilled,
  onReset,
  children,
}: DeviceFrameProps) {
  const [viewportMode, setViewportMode] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <div className="flex flex-col items-center">
      {/* Control Toolbar */}
      <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        {/* State Toggle */}
        <div className="flex items-center rounded-xl bg-[#F2F4F6] p-1">
          <button
            type="button"
            onClick={() => onToggleFilled(false)}
            className={`rounded-lg px-3 py-1.5 text-[12px] font-semibold transition ${
              !isFilled
                ? 'bg-white text-[#191F28] shadow-xs'
                : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            빈 화면 상태
          </button>
          <button
            type="button"
            onClick={() => onToggleFilled(true)}
            className={`rounded-lg px-3 py-1.5 text-[12px] font-semibold transition ${
              isFilled
                ? 'bg-white text-[#3182F6] shadow-xs'
                : 'text-[#6B7684] hover:text-[#191F28]'
            }`}
          >
            채워진 / 정상 상태
          </button>
        </div>

        {/* Viewport & Reset */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center rounded-xl bg-[#F2F4F6] p-1">
            <button
              type="button"
              onClick={() => setViewportMode('mobile')}
              title="모바일 프레임"
              aria-label="모바일 프레임"
              className={`rounded-lg p-1.5 transition ${
                viewportMode === 'mobile'
                  ? 'bg-white text-[#191F28] shadow-xs'
                  : 'text-[#8B95A1] hover:text-[#4E5968]'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewportMode('desktop')}
              title="웹 카드 프레임"
              aria-label="웹 카드 프레임"
              className={`rounded-lg p-1.5 transition ${
                viewportMode === 'desktop'
                  ? 'bg-white text-[#191F28] shadow-xs'
                  : 'text-[#8B95A1] hover:text-[#4E5968]'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 rounded-xl bg-[#F2F4F6] px-2.5 py-1.5 text-[12px] font-semibold text-[#4E5968] transition hover:bg-[#E5E8EB] hover:text-[#191F28]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            초기화
          </button>
        </div>
      </div>

      {/* Simulated Device Screen */}
      <div
        className={`w-full transition-all duration-300 ${
          viewportMode === 'mobile' ? 'max-w-[360px]' : 'max-w-[540px]'
        }`}
      >
        <div className="overflow-hidden rounded-[32px] border-[6px] border-[#191F28] bg-[#F7F8FA] shadow-[0_20px_50px_rgba(25,31,40,0.12)]">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-6 pt-3 pb-2 text-[11px] font-semibold text-[#191F28]">
            <span>9:41</span>
            <div className="h-4 w-20 rounded-full bg-[#191F28]" />
            <div className="flex items-center gap-1.5 text-[#333D4B]">
              <Wifi className="h-3.5 w-3.5" />
              <div className="flex h-2.5 w-5 items-center rounded-[3px] border border-[#191F28] p-[1px]">
                <div className="h-full w-3.5 rounded-[1px] bg-[#191F28]" />
              </div>
            </div>
          </div>

          {/* App Sub-Header */}
          <div className="flex items-center justify-between border-b border-[#F2F4F6] bg-white px-5 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[12px] font-bold text-[#3182F6]">{number}</span>
              <span className="text-[13px] font-bold text-[#191F28]">{titleKo}</span>
            </div>
            <span className="text-[11px] font-medium text-[#8B95A1]">{titleEn}</span>
          </div>

          {/* Interactive Viewport Content */}
          <div className="min-h-[410px] bg-[#F2F4F6] p-4">{children}</div>

          {/* Home Indicator */}
          <div className="flex justify-center bg-white py-2.5">
            <div className="h-1 w-28 rounded-full bg-[#D1D6DB]" />
          </div>
        </div>
      </div>
    </div>
  );
}
