import { useEffect, useState } from 'react';
import { Check, Circle, RotateCcw } from 'lucide-react';
import { DemoProps } from './FirstUseDemo';

interface Mission {
  id: number;
  title: string;
  reward: string;
  done: boolean;
}

const INITIAL_MISSIONS: Mission[] = [
  { id: 1, title: '출석 체크하기', reward: '+10P', done: true },
  { id: 2, title: '오늘의 특가 상품 1개 보기', reward: '+20P', done: false },
  { id: 3, title: '만보기 5,000보 달성하기', reward: '+50P', done: false },
];

export function AllCaughtUpDemo({ isFilled, onToggleFilled }: DemoProps) {
  const [missions, setMissions] = useState<Mission[]>(
    isFilled ? INITIAL_MISSIONS : INITIAL_MISSIONS.map((m) => ({ ...m, done: true }))
  );

  useEffect(() => {
    setMissions(
      isFilled ? INITIAL_MISSIONS : INITIAL_MISSIONS.map((m) => ({ ...m, done: true }))
    );
  }, [isFilled]);

  const allCompleted = missions.every((m) => m.done);

  const toggleMission = (id: number) => {
    const next = missions.map((m) => (m.id === id ? { ...m, done: !m.done } : m));
    setMissions(next);
    const nextAllDone = next.every((m) => m.done);
    if (nextAllDone === isFilled) {
      onToggleFilled(!nextAllDone);
    }
  };

  if (allCompleted) {
    return (
      <div className="flex min-h-[378px] flex-col items-center justify-center rounded-3xl bg-white px-5 py-10 text-center shadow-xs">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00C471] text-white shadow-md shadow-[#00C471]/25">
          <Check className="h-7 w-7" strokeWidth={2.7} />
        </div>

        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          오늘 미션을 다 끝냈어요
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6B7684]">
          내일 새 미션이 열려요
        </p>

        <button
          type="button"
          onClick={() => onToggleFilled(true)}
          className="mt-6 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#F2F4F6] px-4 text-[12px] font-semibold text-[#4E5968] transition hover:bg-[#E5E8EB]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          미완료 미션 목록 보기
        </button>
      </div>
    );
  }

  const remaining = missions.filter((m) => !m.done).length;

  return (
    <div className="flex min-h-[378px] flex-col rounded-3xl bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between px-1">
        <div>
          <h4 className="text-[15px] font-bold text-[#191F28]">오늘의 미션</h4>
          <p className="text-[12px] text-[#6B7684]">
            남은 미션 <strong className="text-[#3182F6]">{remaining}개</strong>만 완료하면 끝나요
          </p>
        </div>
        <button
          type="button"
          onClick={() => onToggleFilled(false)}
          className="rounded-lg bg-[#E8F3FF] px-2.5 py-1 text-[11.5px] font-semibold text-[#3182F6] hover:bg-[#D4E7FF]"
        >
          모두 완료
        </button>
      </div>

      <div className="space-y-2.5">
        {missions.map((mission) => (
          <button
            key={mission.id}
            type="button"
            onClick={() => toggleMission(mission.id)}
            className={`flex w-full items-center gap-3 rounded-2xl p-3.5 text-left transition ${
              mission.done ? 'bg-[#F9FAFB] opacity-70' : 'bg-[#F2F4F6] hover:bg-[#E8F3FF]'
            }`}
          >
            {mission.done ? (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C471] text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
              </span>
            ) : (
              <Circle className="h-6 w-6 shrink-0 text-[#B0B8C1]" />
            )}
            <span
              className={`flex-1 text-[13px] font-semibold ${
                mission.done ? 'text-[#8B95A1] line-through' : 'text-[#191F28]'
              }`}
            >
              {mission.title}
            </span>
            <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-[#3182F6]">
              {mission.reward}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
