import { motion } from 'framer-motion'
import { Kicker } from '../components/ui'

type Phase = 'ACQUISITION' | 'TECHNIQUE' | 'COMMERCIAL' | 'CONTRAT' | 'OPÉRATIONS'

const STEPS: { n: string; label: string; phase: Phase }[] = [
  { n: '01', label: 'Demande', phase: 'ACQUISITION' },
  { n: '02', label: 'Qualification', phase: 'ACQUISITION' },
  { n: '03', label: 'Visite technique', phase: 'TECHNIQUE' },
  { n: '04', label: 'Rapport technicien', phase: 'TECHNIQUE' },
  { n: '05', label: 'Extraction IA', phase: 'TECHNIQUE' },
  { n: '06', label: 'Devis brouillon', phase: 'COMMERCIAL' },
  { n: '07', label: 'Validation humaine', phase: 'COMMERCIAL' },
  { n: '08', label: 'Signature', phase: 'CONTRAT' },
  { n: '09', label: 'Paiement Stripe', phase: 'CONTRAT' },
  { n: '10', label: 'Contrat actif', phase: 'CONTRAT' },
  { n: '11', label: 'Opérations', phase: 'OPÉRATIONS' },
]

const PHASE_STYLE: Record<Phase, string> = {
  ACQUISITION: 'bg-[var(--color-paper-2)] border-[var(--color-line-strong)]',
  TECHNIQUE: 'bg-[#eef3e2] border-[#cfdcae]',
  COMMERCIAL: 'bg-[#fffefb] border-[var(--color-line-strong)]',
  CONTRAT: 'bg-[#e9efe9] border-[#c2d3c4]',
  OPÉRATIONS: 'bg-[var(--color-night-2)] border-[var(--color-night-line)] text-[#eceae0]',
}

export default function Slide08QuoteFlowProcess() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Q2 · Parcours</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">De la demande client au contrat actif</h1>
        </div>
        <div className="flex flex-wrap justify-end gap-[0.35cqw]">
          {(['ACQUISITION', 'TECHNIQUE', 'COMMERCIAL', 'CONTRAT', 'OPÉRATIONS'] as Phase[]).map((phase) => (
            <span key={phase} className={`t-label rounded-[0.3cqw] border px-[0.5cqw] py-[0.2cqw] ${PHASE_STYLE[phase]}`}>
              {phase}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[2.2cqw] flex flex-1 items-start gap-[0.45cqw]">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + index * 0.045, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-1 flex-col gap-[0.45cqw]"
          >
            <div className={`flex-1 rounded-[0.7cqw] border px-[0.55cqw] py-[0.75cqw] ${PHASE_STYLE[step.phase]}`}>
              <div className="mono t-label opacity-60">{step.n}</div>
              <div className="t-small mt-[0.35cqw] font-medium leading-tight">{step.label}</div>
            </div>
            <div className="h-[0.28cqw] w-full rounded-full opacity-70" style={{ background: index < 5 ? 'var(--color-accent-deep)' : 'var(--color-line-strong)' }} />
          </motion.div>
        ))}
      </div>

      <div className="mt-auto border-t border-[var(--color-line)] pt-[1.1cqw]">
        <div className="flex items-center justify-between gap-[2cqw]">
          <p className="t-body text-[var(--color-ink-soft)]">
            <span className="font-semibold">Deux points de contrôle humain</span> : la visite technique (03) et la
            validation du devis (07). Le reste est orchestré.
          </p>
          <p className="t-h2 max-w-[40cqw] text-right">
            L’IA structure, l’humain valide, Odoo applique les règles.
          </p>
        </div>
      </div>
    </div>
  )
}
