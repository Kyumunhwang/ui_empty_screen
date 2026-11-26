# Empty States UI/UX Showcase (한국형 빈 화면 패턴 라이브러리)

웹/앱 개발 시 즉시 복사하여 실무에 적용할 수 있는 **9가지 UI/UX 빈 화면(Empty States) 패턴 인터랙티브 쇼케이스 & 코드 스니펫 라이브러리**입니다.

## 주요 기능

- **전체 한눈에 보기 (3×3 카탈로그)**: 9가지 패턴을 카드 형태로 한눈에 비교하고 클릭해 상세 데모로 이동
- **실시간 인터랙티브 데모**: 모든 패턴에서 `빈 화면 ↔ 채워진/정상 상태` 전환 및 모바일/웹 프레임 전환 지원
- **원클릭 코드 복사**: `React + Tailwind` 및 `HTML + CSS + JS` 코드 스니펫 즉시 복사
- **UX 가이드 & 카피 원칙**: 노출 조건(`triggerCondition`), 화면 구성 요소, Do/Don't 가이드, 마이크로 카피 원칙 제공

## 9가지 패턴 목록

| 번호 | 패턴명 (한글) | 패턴명 (영문) | 핵심 시나리오 |
| :---: | :--- | :--- | :--- |
| 01 | 첫 사용 | First use | 신규 진입 시 기능 가치 설명 및 첫 행동(CTA) 유도 |
| 02 | 검색 결과 없음 | No search results | 검색어 맥락 유지, 초기화 및 추천 키워드 제공 |
| 03 | 필터 결과 없음 | No filter results | 활성 필터 칩 유지 및 원클릭 필터 초기화 |
| 04 | 오프라인 | Offline | 네트워크 단절 안내 및 재연결 시도 |
| 05 | 권한 필요 | Permission needed | 알림 등 권한 필요성 사전 설명 및 인라인 토글 |
| 06 | 모두 완료 | All caught up | 미션/할 일 완료 시 긍정적 성취 피드백 |
| 07 | 삭제 직후 | Emptied | 장바구니 등 비우기 직후 확인 및 되돌리기(Undo) |
| 08 | 오류 화면 | Error state | 스켈레톤 로딩 후 장애 안내 및 재시도 버튼 |
| 09 | 잠김 | Locked content | 블러 처리된 미리보기와 멤버십 잠금 해제 유도 |

## 실행 및 빌드

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행 (http://localhost:3007)
npm run dev:empty-showcase

# 프로덕션 빌드 (dist/ 생성)
npm run build
```

## Render Static Site 배포 설정

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
