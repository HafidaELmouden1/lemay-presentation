import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react'
import { Kicker } from '../components/ui'

export default function Slide05LeadGuardHumanReview() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <Kicker>Q1 · Garde-fou</Kicker>
        <h1 className="t-h1 mt-[0.6cqw] max-w-[72cqw]">
          Automatiser quand la confiance est haute.
          <br />
          <span className="text-[var(--color-muted)]">Revue humaine quand ça compte.</span>
        </h1>
      </div>

      <div className="mt-[1.8cqw] grid min-h-0 flex-1 grid-cols-2 gap-[1.2cqw]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-[1.1cqw] border border-[var(--color-line)] bg-[#fffefb] p-[1.4cqw]"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-[0.6cqw]">
              <ShieldCheck size="1.3cqw" strokeWidth={1.7} className="text-[#2f5c22]" />
              <div>
                <div className="t-h2">Demande qualifiée</div>
                <div className="t-small text-[var(--color-muted)]">Automatisation complète</div>
              </div>
            </div>
            <span className="chip chip-accent">0,96</span>
          </div>

          <div className="mt-[1.2cqw]">
            <Confidence value={96} />
          </div>

          <div className="mt-[1.2cqw] rounded-[0.8cqw] bg-[var(--color-paper-2)] px-[1cqw] py-[0.8cqw]">
            <div className="t-label text-[var(--color-muted)]">Résultat</div>
            <div className="t-body mt-[0.2cqw] font-medium">Site Visit To Schedule</div>
          </div>

          <ul className="mt-[1cqw] space-y-[0.45cqw]">
            {[
              'Tags posés automatiquement',
              'Tâche de visite créée',
              'Opportunité déplacée dans le pipeline',
              'Note d’analyse attachée',
            ].map((item) => (
              <li key={item} className="t-small flex items-center gap-[0.5cqw] text-[var(--color-ink-soft)]">
                <span className="h-[0.3cqw] w-[0.3cqw] rounded-full bg-[var(--color-ink)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-[0.8cqw]">
            <div className="rule mb-[0.6cqw]" />
            <div className="t-small text-[var(--color-muted)]">
              ≥ 0,80 et champs requis présents → route automatique
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-[1.1cqw] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-paper-2)] p-[1.4cqw]"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-[0.6cqw]">
              <AlertTriangle size="1.3cqw" strokeWidth={1.7} className="text-[#8a6a12]" />
              <div>
                <div className="t-h2">Demande incomplète</div>
                <div className="t-small text-[var(--color-muted)]">Revue humaine</div>
              </div>
            </div>
            <span className="chip">0,42</span>
          </div>

          <div className="mt-[1.2cqw]">
            <Confidence value={42} tone="warn" />
          </div>

          <div className="mt-[1.2cqw] rounded-[0.8cqw] border border-[var(--color-line)] bg-[#fffefb] px-[1cqw] py-[0.8cqw]">
            <div className="t-label text-[var(--color-muted)]">Résultat</div>
            <div className="t-body mt-[0.2cqw] font-medium">Human Review / Missing Information</div>
          </div>

          <div className="mt-[1cqw]">
            <div className="t-label mb-[0.4cqw] text-[var(--color-muted)]">Informations manquantes</div>
            <div className="flex flex-wrap gap-[0.35cqw]">
              {['service', 'budget', 'localisation'].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-[0.8cqw]">
            <div className="rule mb-[0.6cqw]" />
            <div className="t-small text-[var(--color-muted)]">
              Tâche de relance créée avec la raison. Aucun message automatique au prospect.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[1.2cqw] flex items-center gap-[0.8cqw] rounded-[0.9cqw] bg-[var(--color-night)] px-[1.4cqw] py-[0.9cqw] text-[#eceae0]">
        <ArrowRight size="1.1cqw" strokeWidth={1.6} className="text-[var(--color-accent)]" />
        <p className="t-body">L’IA accélère la décision sans retirer le contrôle humain.</p>
      </div>
    </div>
  )
}

function Confidence({ value, tone = 'ok' }: { value: number; tone?: 'ok' | 'warn' }) {
  return (
    <div>
      <div className="mb-[0.35cqw] flex items-baseline justify-between">
        <span className="t-label text-[var(--color-muted)]">Confiance</span>
        <span className="mono t-small font-medium">{value} %</span>
      </div>
      <div className="h-[0.45cqw] w-full overflow-hidden rounded-full bg-[var(--color-line)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: tone === 'ok' ? 'var(--color-accent-deep)' : '#c9a227' }}
        />
      </div>
      <div className="t-small mt-[0.3cqw] text-[var(--color-muted)]">
        {tone === 'ok' ? 'Seuil et champs requis satisfaits' : 'Sous le seuil, ou champs requis absents'}
      </div>
    </div>
  )
}
