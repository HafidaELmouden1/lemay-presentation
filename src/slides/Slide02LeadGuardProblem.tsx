import { motion } from 'framer-motion'
import { ClipboardList, FileSearch, Workflow, Send } from 'lucide-react'
import { Card, Lead, NumberBadge, SlideHead, StatusTag } from '../components/ui'

const CHAIN = [
  { icon: ClipboardList, title: 'Demande entrante', caption: 'Forme GoHighLevel' },
  { icon: FileSearch, title: 'Qualification', caption: 'Ce qui manque' },
  { icon: Workflow, title: 'Analyse IA', caption: 'Extraction structurée' },
  { icon: Send, title: 'Action CRM', caption: 'Étape, tags, tâche' },
]

const GOALS = [
  { title: 'Qualifier la demande', body: 'Service, type de projet, ville, ampleur — sans relire chaque formulaire.' },
  { title: 'Détecter ce qui manque', body: 'Une demande incomplète reste une demande, mais elle part en revue humaine.' },
  { title: 'Recommander l’action suivante', body: 'Visite technique, préparation de devis, ou revue — décidé par des règles.' },
]

export default function Slide02LeadGuardProblem() {
  return (
    <div className="flex h-full flex-col">
      <SlideHead
        kicker="Question 1 — GoHighLevel + n8n + IA"
        title="LeadGuard AI — de la demande reçue à l’opportunité exploitable"
        lead="Un prospect remplit un formulaire. Le système qualifie, repère les manques et propose la prochaine action commerciale."
      />

      <div className="mt-[1.8cqw] grid grid-cols-[repeat(4,1fr)] items-stretch gap-[0.8cqw]">
        {CHAIN.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="flex h-full items-center gap-[0.8cqw] px-[1cqw] py-[0.9cqw]">
              <step.icon size="1.3cqw" strokeWidth={1.6} className="text-[var(--color-ink-soft)]" />
              <div className="min-w-0">
                <div className="t-body truncate font-medium">{step.title}</div>
                <div className="t-small truncate text-[var(--color-muted)]">{step.caption}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-[1.8cqw] grid grid-cols-3 gap-[1cqw]">
        {GOALS.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card tone="flat" className="h-full px-[1.1cqw] py-[1cqw]">
              <div className="mb-[0.7cqw] flex items-center gap-[0.6cqw]">
                <NumberBadge n={index + 1} tone="accent" />
                <div className="t-body font-semibold">{goal.title}</div>
              </div>
              <p className="t-small text-[var(--color-ink-soft)]">{goal.body}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-[0.8cqw] border-t border-[var(--color-line)] pt-[1cqw]">
        <span className="t-label text-[var(--color-muted)]">Cadre de la démo</span>
        <StatusTag kind="REAL" />
        <span className="t-small text-[var(--color-ink-soft)]">HighLevel Developer Sandbox</span>
        <span className="t-small text-[var(--color-muted)]">·</span>
        <span className="t-small text-[var(--color-ink-soft)]">marques fictives, contacts synthétiques</span>
        <span className="ml-auto t-small italic text-[var(--color-muted)]">
          Proof of concept personnel — pas une implémentation client
        </span>
      </div>
    </div>
  )
}
