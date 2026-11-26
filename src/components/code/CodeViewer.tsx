import { useEffect, useState } from 'react';
import { Check, Code2, Copy, FileCode2, Lightbulb } from 'lucide-react';
import { EmptyStatePattern } from '../../data/emptyStatePatterns';

type CodeTab = 'react' | 'html';

interface CodeViewerProps {
  pattern: EmptyStatePattern;
}

export function CodeViewer({ pattern }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>('react');
  const [copied, setCopied] = useState(false);

  const code = activeTab === 'react' ? pattern.reactTailwindCode : pattern.htmlCssJsCode;
  const lines = code.split('\n');

  useEffect(() => {
    setCopied(false);
  }, [pattern.id, activeTab]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }

    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-label="복사용 코드 및 카피라이팅 원칙"
      className="flex h-full flex-col gap-4"
    >
      {/* Code Panel */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-[24px] border border-[#E5E8EB] bg-white shadow-[0_2px_10px_rgba(25,31,40,0.04)]">
        {/* Tabs & Copy Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F2F4F6] px-4 py-3">
          <div className="flex items-center rounded-xl bg-[#F2F4F6] p-1">
            <button
              type="button"
              onClick={() => setActiveTab('react')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition ${
                activeTab === 'react'
                  ? 'bg-white text-[#3182F6] shadow-2xs'
                  : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              React + Tailwind
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition ${
                activeTab === 'html'
                  ? 'bg-white text-[#3182F6] shadow-2xs'
                  : 'text-[#6B7684] hover:text-[#191F28]'
              }`}
            >
              <FileCode2 className="h-3.5 w-3.5" />
              HTML + CSS + JS
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex h-8 items-center gap-1.5 rounded-xl px-3.5 text-[12px] font-semibold transition active:scale-[0.98] ${
              copied
                ? 'bg-[#00C471] text-white'
                : 'bg-[#3182F6] text-white hover:bg-[#1B64DA]'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                복사 완료
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                코드 복사
              </>
            )}
          </button>
        </div>

        {/* File meta bar */}
        <div className="flex items-center justify-between bg-[#1F2631] px-4 py-2 text-[11px] font-medium text-[#8B95A1]">
          <span>
            {activeTab === 'react'
              ? `${pattern.id}.tsx`
              : `${pattern.id}.html`}
          </span>
          <span>{lines.length}줄 · 즉시 실무 적용 가능</span>
        </div>

        {/* Code Body */}
        <div className="max-h-[470px] flex-1 overflow-auto bg-[#191F28] p-4 font-mono text-[12.5px] leading-[1.65] text-[#E5E8EB]">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, index) => (
                <tr key={index} className="hover:bg-white/[0.03]">
                  <td className="w-8 pr-4 text-right text-[11px] text-[#6B7684] select-none">
                    {index + 1}
                  </td>
                  <td className="whitespace-pre text-[#F2F4F6]">
                    {line.length > 0 ? line : ' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Copywriting Principles Card */}
      <div className="rounded-[24px] border border-[#E5E8EB] bg-white p-5 shadow-[0_2px_10px_rgba(25,31,40,0.03)]">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F3FF] text-[#3182F6]">
            <Lightbulb className="h-4 w-4" />
          </div>
          <h3 className="text-[14.5px] font-bold text-[#191F28]">
            마이크로 카피 & UX 설계 원칙
          </h3>
        </div>

        <ul className="space-y-2">
          {pattern.copywritingPrinciples.map((principle, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#4E5968]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3182F6]" />
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
