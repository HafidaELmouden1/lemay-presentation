import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, UserCheck } from 'lucide-react'
import { Kicker } from '../components/ui'

export default function Slide05LeadGuardReview() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <Kicker>Q1 · Contrôle humain</Kicker>
        <h1 className="t-h1 mt-[0.6cqw] max-w-[74cqw]">
          Automatiser quand la confiance est haute. Faire relire quand ça compte.
        </h1>
      </div>

      <div className="mt-[2cqw] grid min-h-0 flex-1 grid-cols-2 gap-[1.2cqw]">
        {/* qualified */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card flex flex-col p-[1.5cqw]"
        >
          <div className="flex items-center justify-between">
            <span className="t-label text-[var(--color-muted)]">Route automatique</span>
            <span className="chip chip-accent">site_visit</span>
          </div>

          <div className="mt-[1.2cqw] flex items-baseline gap-[0.8cqw]">
            <span className="mono text-[clamp(2rem,4.4cqw,4.6rem)] leading-none">0,96</span>
            <span className="t-body text-[var(--color-muted)]">confiance</span>
          </div>

          <div className="t-h2 mt-[0.8cqw]">Demande qualifiée</div>
          <p className="t-small mt-[0.4cqw] text-[var(--color-ink-soft)]">
            Service reconnu, ville couverte, consentement présent, aucun signal de sécurité.
          </p>

          <div className="mt-auto space-y-[0.5cqw] border-t border-[var(--color-line)] pt-[0.8cqw]">
            <div className="flex items-center gap-[0.5cqw]">
              <CheckCircle2 size="1cqw" strokeWidth={1.8} className="text-[#2f5c22]" />
              <span className="t-small">
                Étape <span className="font-medium">Site Visit To Schedule</span>
              </span>
            </div>
            <div className="flex items-center gap-[0.5cqw]">
              <CheckCircle2 size="1cqw" strokeWidth={1.8} className="text-[#2f5c22]" />
              <span className="t-small">Tags, note d’analyse, tâche commerciale</span>
            </div>
          </div>
        </motion.div>

        {/* review */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-[1.1cqw] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-[1.5cqw]"
        >
          <div className="flex items-center justify-between">
            <span className="t-label text-[var(--color-muted)]">Route revue humaine</span>
            <span className="chip">human_review</span>
          </div>

          <div className="mt-[1.2cqw] flex items-baseline gap-[0.8cqw]">
            <span className="mono text-[clamp(2rem,4.4cqw,4.6rem)] leading-none text-[var(--color-ink-soft)]">0,42</span>
            <span className="t-body text-[var(--color-muted)]">confiance</span>
          </div>

          <div className="t-h2 mt-[0.8cqw]">Demande incomplète</div>
          <p className="t-small mt-[0.4cqw] text-[var(--color-ink-soft)]">
            « Je voudrais faire des travaux. Merci de me contacter. »
          </p>

          <div className="mt-[0.8cqw] flex flex-wrap gap-[0.3cqw]">
            {['service manquant', 'budget absent', 'adresse absente'].map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto space-y-[0.5cqw] border-t border-[var(--color-line-strong)] pt-[0.8cqw]">
            <div className="flex items-center gap-[0.5cqw]">
              <AlertTriangle size="1cqw" strokeWidth={1.8} className="text-[#8a6a12]" />
              <span className="t-small">
                Étape <span className="font-medium">Missing Information</span>
              </span>
            </div>
            <div className="flex items-center gap-[0.5cqw]">
              <UserCheck size="1cqw" strokeWidth={1.8} className="text-[#8a6a12]" />
              <span className="t-small">Tâche interne : vérifier et compléter</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[1.2cqw] rounded-[0.9cqw] bg-[var(--color-night)] px-[1.4cqw] py-[0.95cqw]">
        <p className="t-body text-[#eceae0]">
          « L’IA accélère la décision sans retirer le contrôle humain. »
        </p>
      </div>
    </div>
  )
}
