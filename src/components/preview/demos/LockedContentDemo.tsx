import { Crown, Lock, Sparkles } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

export function LockedContentDemo({ isFilled, onToggleFilled }: DemoProps) {
  return (
    <div className="relative flex min-h-[378px] flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-xs">
      {/* Underlying Premium Content */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          !isFilled ? 'pointer-events-none select-none blur-[5px] opacity-60' : ''
        }`}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF7E6] px-2.5 py-1 text-[11px] font-bold text-[#D97706]">
            <Crown className="h-3 w-3" />
            멤버십 전용 리포트
          </span>
          {isFilled && (
            <button
              type="button"
              onClick={() => onToggleFilled(false)}
              className="rounded-lg bg-[#F2F4F6] px-2.5 py-1 text-[11px] font-semibold text-[#6B7684] hover:bg-[#E5E8EB]"
            >
              잠금 상태로
            </button>
          )}
        </div>

        <h4 className="text-[16px] font-bold text-[#191F28]">
          2026 모바일 커머스 전환율 벤치마크
        </h4>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#4E5968]">
          상위 10% 프로덕트는 Empty State에 행동 유도 CTA를 배치해 이탈률을 평균 34% 낮췄습니다.
        </p>

        <div className="mt-4 space-y-2.5 rounded-2xl bg-[#F9FAFB] p-4">
          <div className="flex items-center justify-between text-[12.5px]">
            <span className="text-[#6B7684]">첫 사용 전환율</span>
            <strong className="text-[#3182F6]">+34.2%</strong>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E8EB]">
            <div className="h-full w-4/5 rounded-full bg-[#3182F6]" />
          </div>
          <div className="flex items-center justify-between pt-1 text-[12.5px]">
            <span className="text-[#6B7684]">검색 재시도율</span>
            <strong className="text-[#00C471]">+28.7%</strong>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E8EB]">
            <div className="h-full w-3/4 rounded-full bg-[#00C471]" />
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4 text-[12px] font-semibold text-[#3182F6]">
          <Sparkles className="h-4 w-4" />
          멤버십 회원 전용 전체 원문 열람 중
        </div>
      </div>

      {/* Lock Overlay */}
      {!isFilled && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/55 px-6 text-center backdrop-blur-[2px]">
          <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-[#191F28] text-white shadow-lg">
            <Lock className="h-5 w-5" />
          </div>

          <h3 className="text-[16.5px] font-bold tracking-[-0.02em] text-[#191F28]">
            멤버십 회원만 볼 수 있어요
          </h3>
          <p className="mt-1 text-[12.5px] text-[#6B7684]">
            지금 열어보면 핵심 지표와 케이스 스터디를 볼 수 있어요
          </p>

          <button
            type="button"
            onClick={() => onToggleFilled(true)}
            className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#3182F6] px-6 text-[13.5px] font-semibold text-white shadow-sm transition hover:bg-[#1B64DA] active:scale-[0.98]"
          >
            열어보기
          </button>
        </div>
      )}
    </div>
  );
}
