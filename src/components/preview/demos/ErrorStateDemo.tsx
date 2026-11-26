import { useState } from 'react';
import { AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

export function ErrorStateDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRetry = (shouldSucceed: boolean) => {
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      onToggleFilled(shouldSucceed);
    }, 850);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[378px] flex-col justify-between rounded-3xl bg-white p-5 shadow-xs">
        <div className="space-y-3">
          <div className="animate-shimmer h-5 w-2/5 rounded-lg" />
          <div className="animate-shimmer h-3.5 w-4/5 rounded-lg" />
          <div className="animate-shimmer h-3.5 w-3/4 rounded-lg" />
          <div className="animate-shimmer mt-2 h-28 w-full rounded-2xl" />
          <div className="animate-shimmer h-20 w-full rounded-2xl" />
        </div>
        <p className="text-center text-[12px] font-medium text-[#8B95A1]">
          데이터를 다시 불러오고 있어요...
        </p>
      </div>
    );
  }

  if (!isFilled) {
    return (
      <div className="flex min-h-[378px] flex-col justify-between rounded-3xl bg-white p-5 shadow-xs">
        {/* Subtle Skeleton Context Header */}
        <div className="space-y-2 opacity-60">
          <div className="h-3.5 w-28 rounded-full bg-[#333D4B]" />
          <div className="h-2.5 w-full rounded-full bg-[#E5E8EB]" />
          <div className="h-2.5 w-4/5 rounded-full bg-[#F2F4F6]" />
        </div>

        <div className="my-auto flex flex-col items-center py-6 text-center">
          <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#FFF0F1] text-[#F04452]">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
            잠시 화면을 불러오지 못했어요
          </h3>
          <p className="mt-1.5 text-[12.5px] text-[#6B7684]">
            일시적인 문제일 수 있어요. 다시 시도해 주세요
          </p>

          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={() => handleRetry(true)}
              className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-[#3182F6] px-4 text-[13px] font-semibold text-white transition hover:bg-[#1B64DA]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              다시 불러오기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-5 shadow-xs">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#00C471]">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-[13px] font-bold">정상 응답 복구됨</span>
        </div>
        <button
          type="button"
          onClick={() => handleRetry(false)}
          className="rounded-lg bg-[#FFF0F1] px-2.5 py-1 text-[11.5px] font-semibold text-[#F04452] hover:bg-[#FFE0E3]"
        >
          오류 재현하기
        </button>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl bg-[#F9FAFB] p-4">
          <p className="text-[12px] font-medium text-[#6B7684]">이번 달 소비 리포트</p>
          <p className="mt-1 text-[20px] font-bold text-[#191F28]">482,900원</p>
          <p className="mt-1 text-[11.5px] text-[#3182F6]">지난달보다 12% 절약했어요</p>
        </div>

        <div className="rounded-2xl bg-[#F9FAFB] p-4">
          <p className="text-[13px] font-semibold text-[#191F28]">주요 지출 카테고리</p>
          <div className="mt-2.5 space-y-2 text-[12px] text-[#4E5968]">
            <div className="flex justify-between">
              <span>식비 · 카페</span>
              <strong className="text-[#191F28]">214,000원</strong>
            </div>
            <div className="flex justify-between">
              <span>쇼핑 · 생활</span>
              <strong className="text-[#191F28]">168,900원</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
