import { Bell, BellRing, Truck } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

export function PermissionNeededDemo({ isFilled, onToggleFilled }: DemoProps) {
  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-5 shadow-xs">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
            isFilled ? 'bg-[#3182F6] text-white' : 'bg-[#E8F3FF] text-[#3182F6]'
          }`}
        >
          {isFilled ? <BellRing className="h-6 w-6" /> : <Bell className="h-6 w-6" />}
        </div>

        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          배송이 출발하면 알려 드릴게요
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6B7684]">
          {isFilled ? '알림을 켰어요' : '알림이 꺼져 있어 배송 소식을 놓칠 수 있어요'}
        </p>

        {/* Inline Toggle Control */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#F9FAFB] px-4 py-2.5">
          <span className="text-[13.5px] font-semibold text-[#333D4B]">알림 허용</span>
          <button
            type="button"
            role="switch"
            aria-checked={isFilled}
            aria-label="배송 알림 허용 토글"
            onClick={() => onToggleFilled(!isFilled)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
              isFilled ? 'bg-[#3182F6]' : 'bg-[#D1D6DB]'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition-transform ${
                isFilled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Live Preview of Enabled Notification Feed */}
      {isFilled && (
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#E8F3FF] bg-[#F5F9FF] p-3 text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3182F6] text-white">
            <Truck className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12.5px] font-bold text-[#191F28]">배송 출발 알림이 활성화되었어요</p>
            <p className="truncate text-[11.5px] text-[#4E5968]">
              오늘 밤 11시 물류센터 출고 시 푸시로 안내해 드려요
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
