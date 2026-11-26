export type EmptyStateId =
  | 'first-use'
  | 'no-search-results'
  | 'no-filter-results'
  | 'offline'
  | 'permission-needed'
  | 'all-caught-up'
  | 'emptied'
  | 'error-state'
  | 'locked-content';

export interface EmptyStatePattern {
  id: EmptyStateId;
  number: string;
  titleKo: string;
  titleEn: string;
  category: string;
  summary: string;
  microcopy: {
    headline: string;
    body: string;
    ctaLabel?: string;
  };
  copywritingPrinciples: string[];
  uxGuidelines: {
    triggerCondition: string;
    anatomy: string[];
    doList: string[];
    dontList: string[];
  };
  reactTailwindCode: string;
  htmlCssJsCode: string;
}

export const EMPTY_STATE_PATTERNS: EmptyStatePattern[] = [
  {
    id: 'first-use',
    number: '01',
    titleKo: '첫 사용',
    titleEn: 'First use',
    category: '온보딩 · 행동 유도',
    summary:
      '사용자가 기능을 처음 방문해 아직 쌓인 데이터가 없을 때, 빈 공백 대신 기능의 핵심 가치와 첫 번째 행동을 친절하게 제안합니다.',
    microcopy: {
      headline: '마음에 드는 상품을 찜해 보세요',
      body: '찜해 두면 할인 소식을 알려 드려요',
      ctaLabel: '구경하러 가기',
    },
    copywritingPrinciples: [
      '“찜한 상품이 없습니다” 같은 건조한 사실 전달보다 행동의 이점(할인 알림)을 먼저 말합니다.',
      '부담 없는 1차 행동 버튼(CTA) 하나로 탐색 흐름이 끊기지 않게 연결합니다.',
      '명령조 대신 ‘~해 보세요’, ‘~알려 드려요’ 같은 부드러운 해요체를 사용합니다.',
    ],
    uxGuidelines: {
      triggerCondition: '신규 유저 또는 해당 컬렉션(찜 목록, 북마크, 보관함)의 itemCount === 0인 초기 상태',
      anatomy: ['브랜드 블루 톤 원형 아이콘 배지', '가치 중심 헤드라인(17~18px Bold)', '이점 설명 서브 카피', 'Primary CTA 버튼(#3182F6)'],
      doList: [
        '기능을 썼을 때 얻는 구체적 혜택을 1줄로 요약하기',
        '탐색 화면이나 상품 피드로 즉시 이동하는 단일 CTA 제공하기',
      ],
      dontList: [
        '“데이터가 존재하지 않습니다” 같은 시스템 용어 노출하기',
        '초기 화면에 2개 이상의 경쟁 버튼을 나열해 선택 피로 유발하기',
      ],
    },
    reactTailwindCode: `import { FolderHeart } from 'lucide-react';

interface FirstUseEmptyStateProps {
  onBrowse: () => void;
}

export function FirstUseEmptyState({ onBrowse }: FirstUseEmptyStateProps) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
        <FolderHeart className="h-7 w-7" strokeWidth={1.9} />
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#191F28]">
        마음에 드는 상품을 찜해 보세요
      </h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-[#6B7684]">
        찜해 두면 할인 소식을 알려 드려요
      </p>

      <button
        type="button"
        onClick={onBrowse}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#3182F6] px-6 text-[14px] font-semibold text-white transition hover:bg-[#1B64DA] active:scale-[0.98]"
      >
        구경하러 가기
      </button>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="empty-card" aria-label="찜한 상품 없음">
  <div class="empty-icon-wrap">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
    </svg>
  </div>
  <h3 class="empty-title">마음에 드는 상품을 찜해 보세요</h3>
  <p class="empty-desc">찜해 두면 할인 소식을 알려 드려요</p>
  <button type="button" class="empty-cta" id="browse-btn">구경하러 가기</button>
</section>

<style>
  .empty-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 360px; padding: 48px 24px; border-radius: 24px;
    background: #FFFFFF; text-align: center;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .empty-icon-wrap {
    width: 56px; height: 56px; border-radius: 9999px;
    display: flex; align-items: center; justify-content: center;
    background: #E8F3FF; color: #3182F6; margin-bottom: 20px;
  }
  .empty-title { margin: 0; font-size: 18px; font-weight: 700; color: #191F28; letter-spacing: -0.02em; }
  .empty-desc { margin: 6px 0 0; font-size: 14px; color: #6B7684; line-height: 1.5; }
  .empty-cta {
    margin-top: 24px; height: 44px; padding: 0 24px; border: 0; border-radius: 12px;
    background: #3182F6; color: #FFFFFF; font-size: 14px; font-weight: 600; cursor: pointer;
    transition: background-color 0.15s ease, transform 0.1s ease;
  }
  .empty-cta:hover { background: #1B64DA; }
  .empty-cta:active { transform: scale(0.98); }
</style>

<script>
  document.getElementById('browse-btn')?.addEventListener('click', () => {
    window.location.hash = '#explore';
  });
</script>`,
  },
  {
    id: 'no-search-results',
    number: '02',
    titleKo: '검색 결과 없음',
    titleEn: 'No search results',
    category: '탐색 · 검색 복구',
    summary:
      '사용자가 입력한 검색어에 매칭되는 결과가 없을 때, 입력창의 맥락을 유지하면서 재검색 또는 추천 키워드 전환을 돕습니다.',
    microcopy: {
      headline: '검색 결과가 없어요',
      body: '검색어를 바꿔 다시 찾아 보세요',
      ctaLabel: '추천 키워드 보기',
    },
    copywritingPrinciples: [
      '사용자가 방금 입력한 검색어를 상단 입력창에 그대로 남겨 오타 확인이나 부분 수정을 쉽게 만듭니다.',
      '“일치하는 항목을 찾지 못했습니다” 대신 짧고 명확한 2줄 구조로 시선 부담을 줄입니다.',
      '원클릭 추천 검색어 칩이나 검색어 초기화(X) 버튼을 함께 제공하면 이탈률이 크게 줄어듭니다.',
    ],
    uxGuidelines: {
      triggerCondition: 'query.trim().length > 0 이면서 searchResults.length === 0인 상태',
      anatomy: ['현재 검색어가 유지된 검색 인풋', '뉴트럴 그레이 돋보기 배지', '간결한 안내 헤드라인', '재검색 유도 및 추천 키워드 칩'],
      doList: [
        '입력창 초기화 버튼(X)과 대체 추천 키워드 칩 제공하기',
        '오타 가능성이나 띄어쓰기 변경을 자연스럽게 안내하기',
      ],
      dontList: [
        '검색 결과 없음 화면으로 전환하면서 입력했던 검색어를 지워버리기',
        '실패 원인을 사용자 탓으로 돌리는 어투 사용하기',
      ],
    },
    reactTailwindCode: `import { Search, X } from 'lucide-react';

interface NoSearchResultsProps {
  query: string;
  suggestions?: string[];
  onClear: () => void;
  onSelectSuggestion: (keyword: string) => void;
}

export function NoSearchResults({
  query,
  suggestions = ['무선 이어폰', '노이즈 캔슬링', '블루투스 스피커'],
  onClear,
  onSelectSuggestion,
}: NoSearchResultsProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-5">
      <div className="flex items-center gap-2 rounded-xl border border-[#3182F6] bg-[#F9FAFB] px-3.5 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-[#8B95A1]" />
        <span className="flex-1 truncate text-[14px] font-medium text-[#191F28]">{query}</span>
        <button
          type="button"
          onClick={onClear}
          aria-label="검색어 지우기"
          className="rounded-full p-1 text-[#8B95A1] transition hover:bg-[#E5E8EB] hover:text-[#191F28]"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F4F6] text-[#8B95A1]">
          <Search className="h-5 w-5" />
        </div>
        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          검색 결과가 없어요
        </h3>
        <p className="mt-1 text-[13px] text-[#6B7684]">
          검색어를 바꿔 다시 찾아 보세요
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {suggestions.map((keyword) => (
            <button
              key={keyword}
              type="button"
              onClick={() => onSelectSuggestion(keyword)}
              className="rounded-full bg-[#F2F4F6] px-3.5 py-1.5 text-[12px] font-medium text-[#4E5968] transition hover:bg-[#E8F3FF] hover:text-[#3182F6]"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="search-empty-card">
  <div class="search-bar">
    <span class="search-icon">🔍</span>
    <input id="search-input" type="text" value="무선 이어폰 라벤더" aria-label="검색어" />
    <button id="clear-search" type="button" class="clear-btn" aria-label="검색어 지우기">✕</button>
  </div>

  <div class="empty-body">
    <div class="badge-gray">🔍</div>
    <h3>검색 결과가 없어요</h3>
    <p>검색어를 바꿔 다시 찾아 보세요</p>
    <div class="chip-row">
      <button type="button" class="suggest-chip" data-keyword="무선 이어폰">무선 이어폰</button>
      <button type="button" class="suggest-chip" data-keyword="노이즈 캔슬링">노이즈 캔슬링</button>
    </div>
  </div>
</section>

<style>
  .search-empty-card {
    background: #FFFFFF; border-radius: 24px; padding: 20px;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .search-bar {
    display: flex; align-items: center; gap: 8px; padding: 10px 14px;
    border: 1.5px solid #3182F6; border-radius: 12px; background: #F9FAFB;
  }
  .search-bar input {
    flex: 1; border: 0; background: transparent; font-size: 14px; color: #191F28; outline: none;
  }
  .clear-btn {
    border: 0; background: #E5E8EB; color: #4E5968; width: 22px; height: 22px;
    border-radius: 9999px; font-size: 11px; cursor: pointer;
  }
  .empty-body { padding: 48px 16px; text-align: center; }
  .badge-gray {
    width: 48px; height: 48px; margin: 0 auto 16px; border-radius: 9999px;
    background: #F2F4F6; display: flex; align-items: center; justify-content: center;
  }
  .empty-body h3 { margin: 0; font-size: 17px; font-weight: 700; color: #191F28; }
  .empty-body p { margin: 6px 0 0; font-size: 13px; color: #6B7684; }
  .chip-row { display: flex; justify-content: center; gap: 8px; margin-top: 20px; flex-wrap: wrap; }
  .suggest-chip {
    border: 0; border-radius: 9999px; background: #F2F4F6; color: #4E5968;
    padding: 6px 14px; font-size: 12px; font-weight: 500; cursor: pointer;
  }
  .suggest-chip:hover { background: #E8F3FF; color: #3182F6; }
</style>

<script>
  const input = document.getElementById('search-input');
  document.getElementById('clear-search')?.addEventListener('click', () => {
    input.value = '';
    input.focus();
  });
  document.querySelectorAll('.suggest-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.keyword || '';
    });
  });
</script>`,
  },
  {
    id: 'no-filter-results',
    number: '03',
    titleKo: '필터 결과 없음',
    titleEn: 'No filter results',
    category: '탐색 · 조건 완화',
    summary:
      '여러 필터 조건이 겹쳐 노출할 상품이 0건일 때, 현재 적용된 필터를 그대로 보여주고 한 번에 초기화할 수 있는 출구를 제공합니다.',
    microcopy: {
      headline: '조건에 맞는 상품이 없어요',
      body: '선택한 필터를 일부 해제하거나 초기화해 보세요',
      ctaLabel: '필터 초기화',
    },
    copywritingPrinciples: [
      '검색 결과 없음과 구분하여 “조건에 맞는 상품이 없어요”처럼 필터 교집합 문제임을 정확히 짚어줍니다.',
      'Primary 솔리드 버튼 대신 블루 아웃라인(Ghost/Outline) 버튼을 사용해 가볍게 조건을 되돌리는 인상을 줍니다.',
      '상단에 활성 필터 칩(#191F28 다크 필)을 유지해 개별 필터만 끄는 미세 조정도 가능하게 합니다.',
    ],
    uxGuidelines: {
      triggerCondition: 'activeFilters.length > 0 이고 filteredItems.length === 0인 상태',
      anatomy: ['상단 활성 필터 칩 목록', '조건 불일치 안내 헤드라인', '필터 초기화 아웃라인 버튼'],
      doList: [
        '원클릭 전체 초기화 버튼과 개별 필터 칩 토글을 함께 제공하기',
        '적용된 필터 개수를 시각적으로 명확히 구분하기',
      ],
      dontList: [
        '필터가 적용된 상태에서 필터 바를 숨겨 무엇 때문에 0건인지 모르게 만들기',
        '강한 경고 컬러(빨강)로 표시해 오류처럼 오해하게 만들기',
      ],
    },
    reactTailwindCode: `import { RotateCcw, X } from 'lucide-react';

interface NoFilterResultsProps {
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
  onResetFilters: () => void;
}

export function NoFilterResults({
  activeFilters,
  onRemoveFilter,
  onResetFilters,
}: NoFilterResultsProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-5">
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onRemoveFilter(filter)}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#191F28] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-[#333D4B]"
          >
            <span>{filter}</span>
            <X className="h-3 w-3 opacity-80" />
          </button>
        ))}
      </div>

      <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          조건에 맞는 상품이 없어요
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6B7684]">
          선택한 필터를 줄이면 더 많은 상품을 볼 수 있어요
        </p>

        <button
          type="button"
          onClick={onResetFilters}
          className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#3182F6] bg-white px-5 text-[13px] font-semibold text-[#3182F6] transition hover:bg-[#E8F3FF] active:scale-[0.98]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          필터 초기화
        </button>
      </div>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="filter-empty-card">
  <div class="filter-chips" id="filter-chips">
    <button type="button" class="chip active" data-filter="오늘도착">오늘도착 ✕</button>
    <button type="button" class="chip active" data-filter="무료배송">무료배송 ✕</button>
    <button type="button" class="chip active" data-filter="특가">특가 ✕</button>
  </div>

  <div class="filter-empty-body">
    <h3>조건에 맞는 상품이 없어요</h3>
    <button type="button" class="outline-btn" id="reset-filters">필터 초기화</button>
  </div>
</section>

<style>
  .filter-empty-card {
    background: #FFFFFF; border-radius: 24px; padding: 20px;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip.active {
    border: 0; border-radius: 9999px; background: #191F28; color: #FFFFFF;
    padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer;
  }
  .filter-empty-body {
    min-height: 240px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
  }
  .filter-empty-body h3 { margin: 0; font-size: 17px; font-weight: 700; color: #191F28; }
  .outline-btn {
    margin-top: 18px; height: 40px; padding: 0 20px; border-radius: 12px;
    border: 1px solid #3182F6; background: #FFFFFF; color: #3182F6;
    font-size: 13px; font-weight: 600; cursor: pointer;
  }
  .outline-btn:hover { background: #E8F3FF; }
</style>

<script>
  document.getElementById('reset-filters')?.addEventListener('click', () => {
    document.getElementById('filter-chips').innerHTML = '';
  });
</script>`,
  },
  {
    id: 'offline',
    number: '04',
    titleKo: '오프라인',
    titleEn: 'Offline',
    category: '네트워크 · 상태 복구',
    summary:
      '네트워크 연결이 끊겨 데이터를 불러올 수 없을 때, 원인과 연결 회복 시 자동 복구될 것임을 알려 안심시킵니다.',
    microcopy: {
      headline: '인터넷 연결이 끊겼어요',
      body: '연결되면 장바구니를 다시 불러와요',
      ctaLabel: '다시 연결 시도',
    },
    copywritingPrinciples: [
      '단순히 “오프라인 상태입니다”가 아니라, 연결이 복구되면 어떤 화면(장바구니 등)이 이어질지 맥락을 명시합니다.',
      '와이파이 단절 아이콘에 빨간 사선 포인트를 주어 텍스트를 읽기 전에도 상태를 즉시 인지하게 합니다.',
      '자동 재연결 스피너 또는 수동 재시도 버튼을 제공해 사용자가 멈춘 화면처럼 느끼지 않게 합니다.',
    ],
    uxGuidelines: {
      triggerCondition: '!navigator.onLine 또는 네트워크 타임아웃(NetworkError) 감지 시',
      anatomy: ['단절 상태 아이콘(WifiOff + 레드 슬래시)', '원인 헤드라인', '복구 후 기대 동작 설명', '로딩/재시도 컨트롤'],
      doList: [
        'online 이벤트 리스너와 연동해 연결 복구 시 자동으로 재요청하기',
        '오프라인에서도 이미 캐시된 항목이 있다면 읽기 전용으로 유지하기',
      ],
      dontList: [
        'ERR_INTERNET_DISCONNECTED 같은 브라우저 원시 에러 코드 노출하기',
        '입력 중이던 폼 데이터를 날려버리고 빈 화면으로 덮어쓰기',
      ],
    },
    reactTailwindCode: `import { Loader2, WifiOff } from 'lucide-react';

interface OfflineEmptyStateProps {
  isReconnecting: boolean;
  onRetry: () => void;
}

export function OfflineEmptyState({ isReconnecting, onRetry }: OfflineEmptyStateProps) {
  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F1] text-[#F04452]">
        <WifiOff className="h-6 w-6" strokeWidth={2} />
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#191F28]">
        인터넷 연결이 끊겼어요
      </h3>
      <p className="mt-1.5 text-[14px] text-[#6B7684]">
        연결되면 장바구니를 다시 불러와요
      </p>

      <button
        type="button"
        onClick={onRetry}
        disabled={isReconnecting}
        className="mt-6 inline-flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-[#F2F4F6] px-5 text-[13px] font-semibold text-[#4E5968] transition hover:bg-[#E5E8EB] disabled:opacity-70"
      >
        <Loader2 className={\`h-4 w-4 \${isReconnecting ? 'animate-spin text-[#3182F6]' : ''}\`} />
        {isReconnecting ? '연결 확인 중' : '다시 시도'}
      </button>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="offline-card" role="status" aria-live="polite">
  <div class="offline-badge">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M2 2l20 20"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M10.71 5.058A16 16 0 0 1 22.58 9"/>
    </svg>
  </div>
  <h3>인터넷 연결이 끊겼어요</h3>
  <p>연결되면 장바구니를 다시 불러와요</p>
  <button type="button" class="retry-pill" id="retry-net">다시 시도</button>
</section>

<style>
  .offline-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 340px; padding: 48px 24px; border-radius: 24px;
    background: #FFFFFF; text-align: center;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .offline-badge {
    width: 56px; height: 56px; border-radius: 9999px; background: #FFF0F1; color: #F04452;
    display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
  }
  .offline-card h3 { margin: 0; font-size: 18px; font-weight: 700; color: #191F28; }
  .offline-card p { margin: 6px 0 0; font-size: 14px; color: #6B7684; }
  .retry-pill {
    margin-top: 24px; height: 40px; padding: 0 20px; border: 0; border-radius: 12px;
    background: #F2F4F6; color: #4E5968; font-size: 13px; font-weight: 600; cursor: pointer;
  }
</style>

<script>
  window.addEventListener('online', () => {
    document.querySelector('.offline-card p').textContent = '연결되었어요! 데이터를 불러옵니다.';
  });
</script>`,
  },
  {
    id: 'permission-needed',
    number: '05',
    titleKo: '권한 필요',
    titleEn: 'Permission needed',
    category: '권한 · 사전 맥락 설명',
    summary:
      'OS 시스템 팝업을 무작정 띄우기 전, 왜 이 권한이 필요한지 사용자 가치 중심으로 먼저 설명하고 부드러운 토글로 동의를 얻습니다.',
    microcopy: {
      headline: '배송이 출발하면 알려 드릴게요',
      body: '알림을 켜면 실시간 배송 현황을 놓치지 않아요',
      ctaLabel: '알림 허용',
    },
    copywritingPrinciples: [
      '“푸시 알림 권한을 허용해 주세요”라는 기능 중심 요청 대신, “배송이 출발하면 알려 드릴게요”처럼 구체적 시점을 제시합니다.',
      '인라인 토글 스위치(#3182F6)로 즉각적인 상태 피드백(‘알림을 켰어요’)을 제공해 제어감을 높입니다.',
      '거절하더라도 앱 사용이 막히지 않는다는 심리적 안정감을 줍니다.',
    ],
    uxGuidelines: {
      triggerCondition: 'Notification.permission === "default" | "denied" 이거나 앱 내 알림 설정이 꺼져 있을 때',
      anatomy: ['블루 톤 벨 아이콘 배지', '상황별 혜택 헤드라인', '현재 상태 텍스트', 'iOS/Toss 스타일 토글 스위치'],
      doList: [
        '시스템 권한 다이얼로그 직전에 Pre-permission 화면으로 맥락 설명하기',
        '권한이 영구 거부(denied)된 경우 설정 앱 이동 안내로 전환하기',
      ],
      dontList: [
        '앱 첫 실행 1초 만에 카메라·위치·알림 권한 팝업을 연속으로 띄우기',
        '권한 미허용 시 전체 화면을 잠가버리기',
      ],
    },
    reactTailwindCode: `import { Bell } from 'lucide-react';

interface PermissionNeededProps {
  enabled: boolean;
  onToggle: (nextValue: boolean) => void;
}

export function PermissionNeededEmptyState({ enabled, onToggle }: PermissionNeededProps) {
  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
        <Bell className="h-6 w-6" strokeWidth={2} />
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#191F28]">
        배송이 출발하면 알려 드릴게요
      </h3>
      <p className="mt-1.5 text-[14px] text-[#6B7684]">
        {enabled ? '알림을 켰어요' : '알림을 켜면 배송 소식을 바로 받아요'}
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#F9FAFB] px-4 py-2.5">
        <span className="text-[14px] font-semibold text-[#333D4B]">알림 허용</span>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={() => onToggle(!enabled)}
          className={\`relative inline-flex h-7 w-12 items-center rounded-full transition-colors \${
            enabled ? 'bg-[#3182F6]' : 'bg-[#D1D6DB]'
          }\`}
        >
          <span
            className={\`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform \${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }\`}
          />
        </button>
      </div>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="perm-card">
  <div class="perm-badge">🔔</div>
  <h3>배송이 출발하면 알려 드릴게요</h3>
  <p id="perm-status">알림을 켰어요</p>

  <label class="switch-row">
    <span>알림 허용</span>
    <input type="checkbox" id="notify-toggle" checked />
    <span class="slider"></span>
  </label>
</section>

<style>
  .perm-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 340px; padding: 48px 24px; border-radius: 24px;
    background: #FFFFFF; text-align: center;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .perm-badge {
    width: 56px; height: 56px; border-radius: 9999px; background: #E8F3FF;
    display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;
  }
  .perm-card h3 { margin: 0; font-size: 18px; font-weight: 700; color: #191F28; }
  .perm-card p { margin: 6px 0 0; font-size: 14px; color: #6B7684; }
  .switch-row {
    margin-top: 24px; display: inline-flex; align-items: center; gap: 12px;
    padding: 10px 16px; border-radius: 16px; background: #F9FAFB; cursor: pointer;
    font-size: 14px; font-weight: 600; color: #333D4B;
  }
  .switch-row input { display: none; }
  .slider {
    position: relative; width: 46px; height: 26px; border-radius: 9999px;
    background: #D1D6DB; transition: background-color 0.2s;
  }
  .slider::after {
    content: ''; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px;
    border-radius: 9999px; background: #FFFFFF; transition: transform 0.2s;
  }
  .switch-row input:checked + .slider { background: #3182F6; }
  .switch-row input:checked + .slider::after { transform: translateX(20px); }
</style>

<script>
  const toggle = document.getElementById('notify-toggle');
  const status = document.getElementById('perm-status');
  toggle?.addEventListener('change', (e) => {
    status.textContent = e.target.checked ? '알림을 켰어요' : '알림이 꺼져 있어요';
  });
</script>`,
  },
  {
    id: 'all-caught-up',
    number: '06',
    titleKo: '모두 완료',
    titleEn: 'All caught up',
    category: '성취 · 긍정적 피드백',
    summary:
      '할 일, 미션, 알림함 등 처리해야 할 목록을 모두 끝냈을 때 성취감을 주는 긍정적 엠티 스테이트로 보상을 제공합니다.',
    microcopy: {
      headline: '오늘 미션을 다 끝냈어요',
      body: '내일 새 미션이 열려요',
    },
    copywritingPrinciples: [
      '“남은 미션이 없습니다”라는 허무한 종결 대신 “다 끝냈어요”로 성취를 인정해 줍니다.',
      '다음 방문 시점(“내일 새 미션이 열려요”)을 암시해 자연스러운 리텐션을 설계합니다.',
      '완료/성공 컬러(#00C471 에메랄드 그린) 체크 아이콘 하나로 불필요한 버튼 없이 여백의 미를 살립니다.',
    ],
    uxGuidelines: {
      triggerCondition: 'pendingTasks.length === 0 이고 completedCount > 0인 상태',
      anatomy: ['에메랄드 그린 원형 체크 아이콘', '성취 축하 헤드라인', '다음 주기 안내 서브 카피'],
      doList: [
        '버튼을 억지로 넣지 않고 깔끔한 완료 상태로 여백 유지하기',
        '다음 업데이트나 새 콘텐츠가 열리는 시점을 알려주기',
      ],
      dontList: [
        '모든 일을 마친 사용자에게 첫 사용 화면(“미션을 시작해 보세요”)을 다시 보여주기',
        '단조로운 회색 아이콘으로 실패 화면처럼 보이게 만들기',
      ],
    },
    reactTailwindCode: `import { Check } from 'lucide-react';

export function AllCaughtUpEmptyState() {
  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#00C471] text-white shadow-sm shadow-[#00C471]/25">
        <Check className="h-7 w-7" strokeWidth={2.6} />
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#191F28]">
        오늘 미션을 다 끝냈어요
      </h3>
      <p className="mt-1.5 text-[14px] text-[#6B7684]">
        내일 새 미션이 열려요
      </p>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="done-card" aria-label="모든 미션 완료">
  <div class="done-badge">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
  <h3>오늘 미션을 다 끝냈어요</h3>
  <p>내일 새 미션이 열려요</p>
</section>

<style>
  .done-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 340px; padding: 48px 24px; border-radius: 24px;
    background: #FFFFFF; text-align: center;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .done-badge {
    width: 56px; height: 56px; border-radius: 9999px;
    background: #00C471; color: #FFFFFF;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0, 196, 113, 0.22);
  }
  .done-card h3 { margin: 0; font-size: 18px; font-weight: 700; color: #191F28; }
  .done-card p { margin: 6px 0 0; font-size: 14px; color: #6B7684; }
</style>`,
  },
  {
    id: 'emptied',
    number: '07',
    titleKo: '삭제 직후',
    titleEn: 'Emptied',
    category: '상태 전환 · 실수 복원',
    summary:
      '사용자가 장바구니를 비우거나 목록을 전부 삭제한 직후, 비워진 현재 상태를 깔끔히 확인시켜 주고 실수 시 되돌리기(Undo) 안전망을 제공합니다.',
    microcopy: {
      headline: '장바구니가 비었어요',
      body: '방금 비운 상품을 다시 담거나 새 상품을 둘러볼 수 있어요',
      ctaLabel: '방금 삭제한 상품 되돌리기',
    },
    copywritingPrinciples: [
      '‘첫 사용’과 달리 이미 사용자가 의도적으로 비운 직후이므로 과도한 온보딩 설명을 줄이고 간결히 상태를 확인시킵니다.',
      '삭제 직후 일정 시간 동안 ‘되돌리기(Undo)’ 옵션을 노출해 실수 삭제 스트레스를 예방합니다.',
      '상단 헤더의 파괴적 액션(‘비우기’)은 비워진 후 비활성화하거나 깔끔히 정리합니다.',
    ],
    uxGuidelines: {
      triggerCondition: '기존 items.length > 0 상태에서 사용자가 삭제/비우기 액션을 완료한 직후',
      anatomy: ['컨텍스트 헤더(장바구니)', '휴지통 뉴트럴 아이콘 배지', '간결한 완료 문구', 'Undo 토스트/복원 버튼'],
      doList: [
        '삭제 직전 스냅샷을 메모리에 보관해 1클릭 되돌리기 제공하기',
        '첫 사용 화면과 차별화된 간결한 카피 사용하기',
      ],
      dontList: [
        '이미 비워진 화면에서 활성화된 “비우기” 버튼을 계속 클릭 가능하게 두기',
        '확인 모달 없이 영구 삭제하고 복원 경로도 없애기',
      ],
    },
    reactTailwindCode: `import { RotateCcw, Trash2 } from 'lucide-react';

interface EmptiedCartProps {
  canUndo: boolean;
  onUndo: () => void;
}

export function EmptiedCartState({ canUndo, onUndo }: EmptiedCartProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-white">
      <header className="flex items-center justify-between border-b border-[#F2F4F6] px-5 py-4">
        <span className="text-[15px] font-bold text-[#191F28]">장바구니</span>
        <span className="text-[13px] font-medium text-[#B0B8C1]">비우기</span>
      </header>

      <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-10 text-center">
        <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#F2F4F6] text-[#8B95A1]">
          <Trash2 className="h-5 w-5" />
        </div>
        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          장바구니가 비었어요
        </h3>
        <p className="mt-1.5 text-[13px] text-[#6B7684]">
          필요한 상품을 다시 담아 보세요
        </p>

        {canUndo && (
          <button
            type="button"
            onClick={onUndo}
            className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#F2F4F6] px-4 text-[12px] font-semibold text-[#333D4B] transition hover:bg-[#E5E8EB]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            방금 비운 상품 되돌리기
          </button>
        )}
      </div>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="cart-empty-card">
  <header class="cart-header">
    <strong>장바구니</strong>
    <span class="muted">비우기</span>
  </header>
  <div class="cart-empty-body">
    <div class="trash-badge">🗑️</div>
    <h3>장바구니가 비었어요</h3>
    <button type="button" class="undo-btn" id="undo-cart">방금 비운 상품 되돌리기</button>
  </div>
</section>

<style>
  .cart-empty-card {
    background: #FFFFFF; border-radius: 24px; overflow: hidden;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .cart-header {
    display: flex; justify-content: space-between; padding: 16px 20px;
    border-bottom: 1px solid #F2F4F6; font-size: 15px; color: #191F28;
  }
  .cart-header .muted { color: #B0B8C1; font-size: 13px; }
  .cart-empty-body {
    min-height: 260px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; padding: 32px 20px; text-align: center;
  }
  .trash-badge {
    width: 52px; height: 52px; border-radius: 9999px; background: #F2F4F6;
    display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
  }
  .cart-empty-body h3 { margin: 0; font-size: 17px; font-weight: 700; color: #191F28; }
  .undo-btn {
    margin-top: 18px; height: 36px; padding: 0 16px; border: 0; border-radius: 9999px;
    background: #F2F4F6; color: #333D4B; font-size: 12px; font-weight: 600; cursor: pointer;
  }
</style>`,
  },
  {
    id: 'error-state',
    number: '08',
    titleKo: '오류 화면',
    titleEn: 'Error state',
    category: '예외 처리 · 로딩/복구',
    summary:
      '서버 응답 실패나 일시적 장애로 데이터를 가져오지 못했을 때, 스켈레톤 대기 후 정직하고 침착한 안내와 재시도 버튼을 제공합니다.',
    microcopy: {
      headline: '잠시 화면을 불러오지 못했어요',
      body: '일시적인 문제일 수 있어요. 잠시 후 다시 시도해 주세요',
      ctaLabel: '다시 불러오기',
    },
    copywritingPrinciples: [
      'HTTP 500, Timeout 같은 개발자 용어 대신 사용자가 이해할 수 있는 일상 언어로 상황을 설명합니다.',
      '스켈레톤 UI에서 자연스럽게 오류 상태로 전환되어 레이아웃 시프트(CLS)를 최소화합니다.',
      '언제나 즉시 복구할 수 있는 ‘다시 불러오기’ 버튼을 명확히 제공합니다.',
    ],
    uxGuidelines: {
      triggerCondition: 'API 요청 실패(5xx/Timeout) 및 스켈레톤 로딩 타임아웃 이후 에러 상태',
      anatomy: ['스켈레톤 레이아웃 기반 안정적 높이', '소프트 경고 아이콘 배지', '비난 없는 안내 문구', '재시도 Primary/Secondary 버튼'],
      doList: [
        '초기 로딩에는 스켈레톤 UI를 사용하고, 실패 시 동일 영역 내에서 오류 화면으로 전환하기',
        '지속 실패 시 고객센터/문의하기 보조 경로 제공하기',
      ],
      dontList: [
        '하얀 빈 페이지에 alert() 경고창만 띄우기',
        '스택 트레이스나 내부 API URL을 그대로 노출하기',
      ],
    },
    reactTailwindCode: `import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  isLoading: boolean;
  onRetry: () => void;
}

export function ErrorEmptyState({ isLoading, onRetry }: ErrorStateProps) {
  if (isLoading) {
    return (
      <div className="space-y-3 rounded-3xl bg-white p-6">
        <div className="h-5 w-2/5 animate-pulse rounded-lg bg-[#E5E8EB]" />
        <div className="h-3.5 w-4/5 animate-pulse rounded-lg bg-[#F2F4F6]" />
        <div className="h-3.5 w-3/4 animate-pulse rounded-lg bg-[#F2F4F6]" />
        <div className="h-24 w-full animate-pulse rounded-2xl bg-[#F2F4F6]" />
      </div>
    );
  }

  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F1] text-[#F04452]">
        <AlertCircle className="h-6 w-6" />
      </div>

      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#191F28]">
        잠시 화면을 불러오지 못했어요
      </h3>
      <p className="mt-1.5 text-[14px] text-[#6B7684]">
        일시적인 문제일 수 있어요. 다시 시도해 주세요
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#F2F4F6] px-5 text-[14px] font-semibold text-[#191F28] transition hover:bg-[#E5E8EB]"
      >
        <RefreshCw className="h-4 w-4" />
        다시 불러오기
      </button>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="error-card" role="alert">
  <div class="error-badge">!</div>
  <h3>잠시 화면을 불러오지 못했어요</h3>
  <p>일시적인 문제일 수 있어요. 다시 시도해 주세요</p>
  <button type="button" class="retry-btn" id="error-retry">다시 불러오기</button>
</section>

<style>
  .error-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-height: 340px; padding: 48px 24px; border-radius: 24px;
    background: #FFFFFF; text-align: center;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .error-badge {
    width: 56px; height: 56px; border-radius: 9999px;
    background: #FFF0F1; color: #F04452; font-size: 22px; font-weight: 800;
    display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
  }
  .error-card h3 { margin: 0; font-size: 18px; font-weight: 700; color: #191F28; }
  .error-card p { margin: 6px 0 0; font-size: 14px; color: #6B7684; }
  .retry-btn {
    margin-top: 24px; height: 44px; padding: 0 20px; border: 0; border-radius: 12px;
    background: #F2F4F6; color: #191F28; font-size: 14px; font-weight: 600; cursor: pointer;
  }
  .retry-btn:hover { background: #E5E8EB; }
</style>`,
  },
  {
    id: 'locked-content',
    number: '09',
    titleKo: '잠김',
    titleEn: 'Locked content',
    category: '멤버십 · 전환 유도',
    summary:
      '유료 멤버십이나 상위 등급 전용 콘텐츠일 때, 완전히 가리기보다 블러 처리된 미리보기로 호기심을 자극하고 자연스럽게 해제를 유도합니다.',
    microcopy: {
      headline: '멤버십 회원만 볼 수 있어요',
      body: '가입하면 프리미엄 리포트와 특가 혜택을 바로 열 수 있어요',
      ctaLabel: '열어보기',
    },
    copywritingPrinciples: [
      '배경 콘텐츠를 완전히 숨기지 않고 blur(블러) 처리해 “뒤에 가치 있는 정보가 있다”는 시각적 단서를 남깁니다.',
      '“결제 필요” 대신 “멤버십 회원만 볼 수 있어요” + “열어보기”로 저항감을 낮춥니다.',
      '다크 원형 자물쇠 배지(#191F28)와 블루 CTA(#3182F6)의 강한 대비로 시선을 정확히 모읍니다.',
    ],
    uxGuidelines: {
      triggerCondition: '!user.hasMembership && content.isPremium === true인 상태',
      anatomy: ['블러 처리된 콘텐츠 프리뷰 레이어', '다크 자물쇠 아이콘(#191F28)', '자격 조건 안내 문구', 'Primary CTA 버튼(열어보기)'],
      doList: [
        '실제 콘텐츠의 레이아웃/요약 일부를 블러 뒤에 배치해 기대감 형성하기',
        '로그인 또는 멤버십 가입 완료 시 원래 보려던 콘텐츠로 즉시 복귀시키기',
      ],
      dontList: [
        '아무 맥락 없이 갑자기 결제창으로 리다이렉트하기',
        '잠긴 이유와 어떤 혜택이 열리는지 설명 없이 자물쇠만 띄우기',
      ],
    },
    reactTailwindCode: `import { Lock } from 'lucide-react';

interface LockedContentProps {
  onUnlock: () => void;
}

export function LockedContentState({ onUnlock }: LockedContentProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6">
      <div aria-hidden="true" className="pointer-events-none select-none space-y-3 blur-[5px] opacity-60">
        <div className="h-5 w-2/3 rounded-lg bg-[#D1D6DB]" />
        <div className="h-3.5 w-full rounded-lg bg-[#E5E8EB]" />
        <div className="h-3.5 w-5/6 rounded-lg bg-[#E5E8EB]" />
        <div className="h-28 w-full rounded-2xl bg-[#F2F4F6]" />
        <div className="h-3.5 w-3/4 rounded-lg bg-[#E5E8EB]" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/55 px-6 text-center backdrop-blur-[2px]">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#191F28] text-white shadow-md">
          <Lock className="h-5 w-5" />
        </div>

        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#191F28]">
          멤버십 회원만 볼 수 있어요
        </h3>

        <button
          type="button"
          onClick={onUnlock}
          className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#3182F6] px-6 text-[13px] font-semibold text-white transition hover:bg-[#1B64DA] active:scale-[0.98]"
        >
          열어보기
        </button>
      </div>
    </div>
  );
}`,
    htmlCssJsCode: `<!-- HTML -->
<section class="locked-card">
  <div class="blurred-preview" aria-hidden="true">
    <div class="line lg"></div>
    <div class="line"></div>
    <div class="line md"></div>
    <div class="box"></div>
  </div>
  <div class="lock-overlay">
    <div class="lock-badge">🔒</div>
    <h3>멤버십 회원만 볼 수 있어요</h3>
    <button type="button" class="unlock-btn" id="unlock-btn">열어보기</button>
  </div>
</section>

<style>
  .locked-card {
    position: relative; overflow: hidden; border-radius: 24px; background: #FFFFFF;
    padding: 24px; min-height: 300px;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  .blurred-preview { filter: blur(5px); opacity: 0.6; display: flex; flex-direction: column; gap: 12px; }
  .line { height: 14px; border-radius: 8px; background: #E5E8EB; }
  .line.lg { width: 65%; height: 18px; background: #D1D6DB; }
  .line.md { width: 80%; }
  .box { height: 110px; border-radius: 16px; background: #F2F4F6; }
  .lock-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    background: rgba(255, 255, 255, 0.55); padding: 24px;
  }
  .lock-badge {
    width: 48px; height: 48px; border-radius: 9999px; background: #191F28; color: #FFFFFF;
    display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .lock-overlay h3 { margin: 0; font-size: 17px; font-weight: 700; color: #191F28; }
  .unlock-btn {
    margin-top: 16px; height: 40px; padding: 0 24px; border: 0; border-radius: 12px;
    background: #3182F6; color: #FFFFFF; font-size: 13px; font-weight: 600; cursor: pointer;
  }
</style>`,
  },
];
