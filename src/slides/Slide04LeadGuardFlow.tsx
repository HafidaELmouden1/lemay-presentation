import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, CheckCircle2, ClipboardCheck } from 'lucide-react'
import { Kicker, NumberBadge, Stat, Tag } from '../components/ui'

const STEPS = [
  'Formulaire soumis',
  'Contact + opportunité',
  'Étape AI Qualification',
  'Webhook vers n8n',
  'Normalisation / validation',
  'FastAPI + LLM',
  'Moteur de règles',
  'Synchronisation CRM',
  'Action commerciale',
]

export default function Slide04LeadGuardFlow() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Q1 · Parcours</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">Un lead dans le workflow complet</h1>
        </div>
        <div className="t-small max-w-[28cqw] text-right text-[var(--color-muted)]">
          Neuf étapes, deux systèmes, une seule décision tracée.
        </div>
      </div>

      <div className="mt-[1.6cqw] grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-[1.6cqw]">
        {/* steps */}
        <div className="grid grid-cols-3 grid-rows-3 gap-[0.7cqw]">
          {STEPS.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="card flex items-center gap-[0.6cqw] px-[0.8cqw] py-[0.7cqw]"
            >
              <NumberBadge
                n={String(index + 1).padStart(2, '0')}
                tone={index === 7 ? 'accent' : 'light'}
              />
              <span className="t-small font-medium leading-tight">{step}</span>
            </motion.div>
          ))}
        </div>

        {/* result card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-[1.1cqw] border border-[var(--color-line)] bg-[#fffefb] p-[1.2cqw]"
        >
          <div className="flex items-center justify-between">
            <span className="t-label text-[var(--color-muted)]">Analyse LeadGuard</span>
            <span className="chip chip-accent">route · site_visit</span>
          </div>

          <div className="mt-[0.9cqw] grid grid-cols-2 gap-[0.8cqw]">
            <Stat label="Service" value="Rénovation commerciale" />
            <Stat label="Ville" value="Montréal" />
            <Stat label="Confiance" value="0,96" />
            <Stat label="Action" value="Visite technique" />
          </div>

          <div className="my-[1cqw] h-px bg-[var(--color-line)]" />

          <div className="flex items-center gap-[0.5cqw]">
            <Building2 size="1cqw" strokeWidth={1.7} className="text-[var(--color-ink-soft)]" />
            <span className="t-label text-[var(--color-muted)]">Résultat dans le CRM</span>
          </div>

          <div className="mt-[0.6cqw] space-y-[0.55cqw]">
            <Row label="Étape" value="Site Visit To Schedule" />
            <div className="flex items-start justify-between gap-[0.6cqw]">
              <span className="t-small shrink-0 text-[var(--color-muted)]">Tags</span>
              <span className="flex flex-wrap justify-end gap-[0.25cqw]">
                <Tag>ai-qualified</Tag>
                <Tag>commercial-project</Tag>
                <Tag>site-visit-required</Tag>
              </span>
            </div>
            <Row label="Tâche" value="Planifier une visite technique" />
          </div>

          <div className="mt-auto flex items-start gap-[0.5cqw] rounded-[0.6cqw] bg-[var(--color-paper-2)] px-[0.7cqw] py-[0.55cqw]">
            <ClipboardCheck size="0.95cqw" strokeWidth={1.8} className="mt-[0.1cqw] text-[var(--color-ink-soft)]" />
            <p className="t-small text-[var(--color-ink-soft)]">
              Données synthétiques de démonstration. Aucun message au prospect.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[1cqw] flex items-center gap-[0.5cqw] text-[var(--color-muted)]">
        <CheckCircle2 size="0.95cqw" strokeWidth={1.8} />
        <span className="t-small">
          Chaque écriture CRM est idempotente : rejouer le même formulaire ne crée ni second contact, ni second devis.
        </span>
        <ArrowUpRight size="0.9cqw" strokeWidth={1.8} className="ml-auto" />
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-[0.6cqw]">
      <span className="t-small shrink-0 text-[var(--color-muted)]">{label}</span>
      <span className="t-small text-right font-medium">{value}</span>
    </div>
  )
}
