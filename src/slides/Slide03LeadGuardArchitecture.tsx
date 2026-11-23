import { motion } from 'framer-motion'
import { Brain, Database, GitBranch, Globe, ListChecks, Network, Tags } from 'lucide-react'
import { HArrow, NodeCard, Kicker } from '../components/ui'

const ZONES = [
  { index: '01', name: 'CRM', hint: 'Entrée' },
  { index: '02', name: 'Orchestration', hint: 'Transport' },
  { index: '03', name: 'Intelligence', hint: 'Analyse + décision' },
  { index: '04', name: 'CRM actions', hint: 'Résultat' },
]

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Slide03LeadGuardArchitecture() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between gap-[3cqw]">
        <div>
          <Kicker>Q1 · Architecture</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">LeadGuard AI — System Architecture</h1>
          <p className="t-lead mt-[0.5cqw] max-w-[64cqw]">
            Quatre zones, une responsabilité par zone. Le flux va de gauche à droite, puis revient au CRM.
          </p>
        </div>
        <div className="flex shrink-0 gap-[0.7cqw]">
          {ZONES.map((zone) => (
            <div key={zone.index} className="text-right">
              <div className="mono t-label text-[var(--color-muted)]">{zone.index}</div>
              <div className="t-small font-medium">{zone.name}</div>
              <div className="t-small text-[var(--color-muted)]">{zone.hint}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[1.6cqw] flex min-h-0 flex-1 items-stretch gap-[0.5cqw]">
        {/* 01 CRM */}
        <motion.div {...fade(0.05)} className="flex w-[19%] flex-col gap-[0.6cqw]">
          <ZoneHead index="01" name="CRM" />
          <div className="card flex flex-1 flex-col justify-center gap-[0.7cqw] px-[1cqw] py-[1cqw]">
            <NodeCard icon={Globe} title="GoHighLevel" caption="Formulaire · Contact · Opportunité" badge="REAL" />
            <div className="t-small rounded-[0.6cqw] bg-[var(--color-paper-2)] px-[0.7cqw] py-[0.55cqw] text-[var(--color-ink-soft)]">
              <span className="font-semibold">Source de vérité</span> — le prospect, l’opportunité et l’historique vivent ici.
            </div>
          </div>
        </motion.div>

        <HArrow />

        {/* 02 Orchestration */}
        <motion.div {...fade(0.15)} className="flex w-[22%] flex-col gap-[0.6cqw]">
          <ZoneHead index="02" name="Orchestration" />
          <div className="flex flex-1 flex-col justify-center gap-[0.55cqw]">
            <NodeCard icon={Network} title="n8n — Webhook" caption="Réception, normalisation, validation" badge="REAL" />
            <NodeCard icon={GitBranch} title="n8n — routage" caption="Une branche par décision" />
            <NodeCard icon={ListChecks} title="n8n — CRM sync" caption="Écritures contrôlées, idempotentes" />
          </div>
        </motion.div>

        <HArrow />

        {/* 03 Intelligence */}
        <motion.div {...fade(0.25)} className="flex w-[26%] flex-col gap-[0.6cqw]">
          <ZoneHead index="03" name="Intelligence" />
          <div className="flex flex-1 flex-col justify-center gap-[0.55cqw]">
            <NodeCard icon={Brain} title="LeadGuard API" caption="Python · FastAPI · analyse et validation" />
            <NodeCard icon={Brain} title="DeepSeek" caption="Extraction structurée, JSON validé" />
            <NodeCard
              icon={ListChecks}
              title="Règles déterministes"
              caption="Confiance, ville, service, consentement"
              tone="accent"
              badge="DÉCISION"
            />
          </div>
        </motion.div>

        <HArrow />

        {/* 04 CRM actions */}
        <motion.div {...fade(0.35)} className="flex w-[19%] flex-col gap-[0.6cqw]">
          <ZoneHead index="04" name="CRM actions" />
          <div className="card flex flex-1 flex-col justify-center gap-[0.7cqw] px-[1cqw] py-[1cqw]">
            <NodeCard icon={Database} title="GoHighLevel" caption="Retour dans le CRM" badge="REAL" />
            <div className="flex flex-wrap gap-[0.3cqw]">
              {['champs IA', 'tags', 'étape', 'note', 'tâche'].map((tag) => (
                <span key={tag} className="chip !py-[0.15cqw] !text-[0.62rem]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="t-small text-[var(--color-muted)]">
              Aucun message client n’est envoyé par l’automatisation.
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...fade(0.55)}
        className="mt-[1.2cqw] flex items-center gap-[1cqw] rounded-[0.9cqw] bg-[var(--color-night)] px-[1.4cqw] py-[0.95cqw] text-[#eceae0]"
      >
        <Tags size="1.2cqw" strokeWidth={1.6} className="text-[var(--color-accent)]" />
        <p className="t-body">
          L’IA interprète la demande.{' '}
          <span className="text-[var(--color-accent)]">Les règles déterministes décident.</span> GoHighLevel
          reste le CRM.
        </p>
        <span className="mono ml-auto t-small text-[#8d9284]">form → n8n → FastAPI → n8n → GHL</span>
      </motion.div>
    </div>
  )
}

function ZoneHead({ index, name }: { index: string; name: string }) {
  return (
    <div className="flex items-baseline gap-[0.5cqw] border-b border-[var(--color-line-strong)] pb-[0.35cqw]">
      <span className="mono t-label text-[var(--color-muted)]">{index}</span>
      <span className="t-label">{name}</span>
    </div>
  )
}
