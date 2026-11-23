import type { ReactNode } from 'react'
import { ArrowDown, ArrowRight, type LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ text --- */

export function Kicker({ children, tone = 'ink' }: { children: ReactNode; tone?: 'ink' | 'night' }) {
  return (
    <div
      className={`t-label flex items-center gap-2 ${
        tone === 'night' ? 'text-[#b9beab]' : 'text-[var(--color-muted)]'
      }`}
    >
      <span
        className="inline-block h-[2px] w-[1.6cqw] rounded-full"
        style={{ background: tone === 'night' ? 'var(--color-accent)' : 'var(--color-ink)' }}
      />
      {children}
    </div>
  )
}

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="t-h1">{children}</h1>
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="t-lead">{children}</p>
}

export function Em({ children }: { children: ReactNode }) {
  return <em className="font-[var(--font-display)] not-italic italic">{children}</em>
}

/* --------------------------------------------------------------- surfaces --- */

export function Card({
  children,
  className = '',
  tone = 'light',
}: {
  children: ReactNode
  className?: string
  tone?: 'light' | 'flat' | 'dark'
}) {
  const surface =
    tone === 'dark' ? 'card-dark text-[#eceae0]' : tone === 'flat' ? 'card-flat' : 'card'
  return <div className={`${surface} ${className}`}>{children}</div>
}

/** An architecture block: icon, name, one-line role, optional bullet list. */
export function NodeCard({
  icon: Icon,
  title,
  caption,
  items,
  tone = 'light',
  badge,
  className = '',
}: {
  icon: LucideIcon
  title: string
  caption?: string
  items?: string[]
  tone?: 'light' | 'dark' | 'accent'
  badge?: string
  className?: string
}) {
  const isDark = tone === 'dark'
  const isAccent = tone === 'accent'
  const surface = isDark
    ? 'bg-[var(--color-night-2)] border-[var(--color-night-line)] text-[#eceae0]'
    : isAccent
      ? 'bg-[var(--color-accent)] border-[var(--color-accent-deep)] text-[#20260c]'
      : 'bg-[#fffefb] border-[var(--color-line)] text-[var(--color-ink)]'

  return (
    <div className={`rounded-[0.9cqw] border px-[1cqw] py-[0.85cqw] ${surface} ${className}`}>
      <div className="flex items-start gap-[0.6cqw]">
        <Icon
          size="1.4cqw"
          strokeWidth={1.7}
          className={isAccent ? 'text-[#3d4a12]' : isDark ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink-soft)]'}
          style={{ minWidth: '1.4cqw', minHeight: '1.4cqw' }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-[0.5cqw]">
            <div className="t-h2 !text-[clamp(0.72rem,1.02cqw,1.05rem)] !font-semibold truncate">{title}</div>
            {badge ? (
              <span
                className={`t-label shrink-0 rounded-full px-[0.5cqw] py-[0.15cqw] ${
                  isDark
                    ? 'bg-[#2b2f22] text-[var(--color-accent)]'
                    : 'bg-[var(--color-paper-2)] text-[var(--color-muted)]'
                }`}
              >
                {badge}
              </span>
            ) : null}
          </div>
          {caption ? (
            <div className={`t-small mt-[0.15cqw] ${isDark ? 'text-[#b3b8a8]' : isAccent ? 'text-[#3d4a12]' : 'text-[var(--color-muted)]'}`}>
              {caption}
            </div>
          ) : null}
          {items?.length ? (
            <ul className={`mt-[0.4cqw] space-y-[0.12cqw] ${isDark ? 'text-[#c9cebf]' : isAccent ? 'text-[#33400d]' : 'text-[var(--color-ink-soft)]'}`}>
              {items.map((item) => (
                <li key={item} className="t-small flex gap-[0.4cqw]">
                  <span className="opacity-40">·</span>
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- arrows --- */

export function HArrow({ tone = 'ink', label }: { tone?: 'ink' | 'night' | 'accent'; label?: string }) {
  const color = tone === 'night' ? '#4a4f3f' : tone === 'accent' ? 'var(--color-accent-deep)' : 'var(--color-line-strong)'
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-[0.2cqw]" style={{ width: '2.2cqw' }}>
      <ArrowRight size="1.2cqw" strokeWidth={1.4} style={{ color }} />
      {label ? <span className="t-label !text-[0.5rem] !tracking-[0.08em] text-[var(--color-muted)]">{label}</span> : null}
    </div>
  )
}

export function VArrow({ tone = 'ink', height = '1.6cqw' }: { tone?: 'ink' | 'night' | 'accent'; height?: string }) {
  const color = tone === 'night' ? '#4a4f3f' : tone === 'accent' ? 'var(--color-accent-deep)' : 'var(--color-line-strong)'
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      <ArrowDown size="1.1cqw" strokeWidth={1.4} style={{ color }} />
    </div>
  )
}

/* ------------------------------------------------------------------ parts --- */

export function NumberBadge({ n, tone = 'light' }: { n: number | string; tone?: 'light' | 'dark' | 'accent' }) {
  const surface =
    tone === 'dark'
      ? 'bg-[var(--color-night-2)] text-[#eceae0] border-[var(--color-night-line)]'
      : tone === 'accent'
        ? 'bg-[var(--color-accent)] text-[#23280f] border-[var(--color-accent-deep)]'
        : 'bg-[#fffefb] text-[var(--color-ink)] border-[var(--color-line-strong)]'
  return (
    <span
      className={`mono inline-flex items-center justify-center rounded-full border text-center ${surface}`}
      style={{ width: '2.05cqw', height: '2.05cqw', fontSize: 'clamp(0.6rem, 0.8cqw, 0.86rem)' }}
    >
      {n}
    </span>
  )
}

export function Stat({ label, value, tone = 'light' }: { label: string; value: string; tone?: 'light' | 'dark' }) {
  return (
    <div className={tone === 'dark' ? 'text-[#eceae0]' : ''}>
      <div className="t-label mb-[0.25cqw] opacity-60">{label}</div>
      <div className="mono text-[clamp(0.85rem,1.35cqw,1.45rem)] leading-none">{value}</div>
    </div>
  )
}

export function Tag({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' | 'accent' }) {
  const cls = tone === 'accent' ? 'chip chip-accent' : tone === 'dark' ? 'chip chip-night' : 'chip'
  return <span className={cls}>{children}</span>
}

/** Honest labelling, required by the brief: REAL / MOCK / NOT IMPLEMENTED. */
export function StatusTag({ kind }: { kind: 'REAL' | 'MOCK' | 'NOT IMPLEMENTED' }) {
  const map = {
    REAL: 'border-[#2f5c22] bg-[#e8f6dd] text-[#2f5c22]',
    MOCK: 'border-[#8a6a12] bg-[#fdf3d7] text-[#7a5c0a]',
    'NOT IMPLEMENTED': 'border-[#8b3b3b] bg-[#fbe5e5] text-[#8b3b3b]',
  } as const
  return (
    <span className={`t-label rounded-[0.3cqw] border px-[0.45cqw] py-[0.15cqw] ${map[kind]}`}>{kind}</span>
  )
}

export function SlideFoot({ left, right }: { left: ReactNode; right?: ReactNode }) {
  return (
    <div className="mt-auto flex items-end justify-between gap-[2cqw] pt-[1.2cqw]">
      <div className="t-small text-[var(--color-muted)]">{left}</div>
      {right ? <div className="t-small text-right text-[var(--color-muted)]">{right}</div> : null}
    </div>
  )
}

/** Section head used by most slides: kicker + title + optional lead. */
export function SlideHead({
  kicker,
  title,
  lead,
  tone = 'ink',
  className = '',
}: {
  kicker: string
  title: ReactNode
  lead?: ReactNode
  tone?: 'ink' | 'night'
  className?: string
}) {
  return (
    <header className={`flex flex-col gap-[0.7cqw] ${className}`}>
      <Kicker tone={tone}>{kicker}</Kicker>
      <h1 className={`t-h1 ${tone === 'night' ? 'text-white' : ''}`}>{title}</h1>
      {lead ? (
        <p className={`t-lead max-w-[58cqw] ${tone === 'night' ? 'text-[#b3b8a8]' : ''}`}>{lead}</p>
      ) : null}
    </header>
  )
}
