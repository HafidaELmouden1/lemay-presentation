import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Kicker } from '../components/ui'
import { SLIDES, formatClock } from '../data/presentation'

const AGENDA = [
  { n: '01', label: 'GoHighLevel + n8n + AI', detail: 'LeadGuard AI' },
  { n: '02', label: 'QuoteFlow AI + Odoo 19', detail: 'Commercial workflow' },
  { n: '03', label: 'Problem solving', detail: 'FreeProxy' },
  { n: '04', label: 'Full ownership', detail: 'SuperChantier' },
  { n: '05', label: 'Rapid adaptation', detail: 'GoHighLevel' },
]

export default function Slide01Intro() {
  return (
    <div className="flex h-full flex-col">
      <Kicker>Présentation d’entretien · CRM &amp; automatisation</Kicker>

      <div className="mt-[2.4cqw] grid grid-cols-[1.25fr_0.85fr] gap-[4cqw]">
        <div>
          <h1 className="t-display">
            CRM <span className="text-[var(--color-line-strong)]">·</span> Automation{' '}
            <span className="text-[var(--color-line-strong)]">·</span>
            <br />
            AI Integration
          </h1>

          <div className="mt-[2.2cqw] flex items-center gap-[1cqw]">
            <div className="h-[0.35cqw] w-[4cqw] rounded-full bg-[var(--color-accent-deep)]" />
            <div className="t-h2">Hafida El-Mouden</div>
          </div>

          <p className="t-lead mt-[0.8cqw] max-w-[42cqw]">
            Python <span className="text-[var(--color-line-strong)]">•</span> APIs{' '}
            <span className="text-[var(--color-line-strong)]">•</span> n8n{' '}
            <span className="text-[var(--color-line-strong)]">•</span> Odoo 19{' '}
            <span className="text-[var(--color-line-strong)]">•</span> GoHighLevel{' '}
            <span className="text-[var(--color-line-strong)]">•</span> IA
          </p>
        </div>

        <div className="card px-[1.4cqw] py-[1.2cqw]">
          <div className="t-label mb-[0.9cqw] text-[var(--color-muted)]">Au programme — {formatClock(SLIDES.reduce((t, s) => t + s.seconds, 0))}</div>
          <ul className="flex flex-col">
            {AGENDA.map((item, index) => (
              <motion.li
                key={item.n}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-[0.9cqw] border-b border-[var(--color-line)] py-[0.62cqw] last:border-0"
              >
                <span className="mono t-small text-[var(--color-muted)]">{item.n}</span>
                <span className="t-body flex-1 truncate font-medium">{item.label}</span>
                <span className="t-small text-[var(--color-muted)]">{item.detail}</span>
                <ArrowRight size="0.9cqw" strokeWidth={1.5} className="text-[var(--color-line-strong)]" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-[var(--color-line)] pt-[1cqw]">
        <div className="t-small text-[var(--color-muted)]">
          Deux architectures · un incident réel · un parcours de bout en bout · une méthode
        </div>
        <div className="t-small mono text-[var(--color-muted)]">Hafida El-Mouden · 2026</div>
      </div>
    </div>
  )
}
