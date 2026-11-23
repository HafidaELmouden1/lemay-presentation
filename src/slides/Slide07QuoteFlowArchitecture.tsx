import { motion } from 'framer-motion'
import { Banknote, Boxes, FileText, Mail, MessageSquare, PenTool, Phone, Server, Workflow, Brain } from 'lucide-react'
import { Kicker, NodeCard } from '../components/ui'

const BANDS = [
  {
    label: 'Canaux',
    hint: 'Entrée',
    cards: [
      { icon: Mail, title: 'E-mail', caption: 'Demandes clients' },
      { icon: Boxes, title: 'Formulaire', caption: 'Site web' },
      { icon: Phone, title: 'Téléphone', caption: 'Appel qualifié' },
      { icon: MessageSquare, title: 'CRM', caption: 'Odoo / autres' },
    ],
  },
  {
    label: 'Orchestration',
    hint: 'Transport',
    cards: [{ icon: Workflow, title: 'n8n', caption: 'Routage, reprise, journalisation' }],
    wide: true,
  },
  {
    label: 'Intelligence',
    hint: 'Analyse',
    cards: [
      { icon: Brain, title: 'QuoteFlow AI', caption: 'Python · FastAPI' },
      { icon: Brain, title: 'DeepSeek', caption: 'GLM en fallback' },
      { icon: FileText, title: 'Extraction structurée', caption: 'JSON validé' },
      { icon: FileText, title: 'Règles métier', caption: 'Déterministes' },
    ],
  },
  {
    label: 'Odoo 19',
    hint: 'Source de vérité',
    cards: [
      { icon: Boxes, title: 'CRM' },
      { icon: Boxes, title: 'Client' },
      { icon: Boxes, title: 'Visite technique' },
      { icon: FileText, title: 'Devis' },
      { icon: FileText, title: 'Contrat' },
      { icon: Mail, title: 'Mail center' },
    ],
    highlight: true,
  },
  {
    label: 'Services',
    hint: 'Externe',
    cards: [
      { icon: Server, title: 'SMTP / IMAP', caption: 'OVH · Titan · Hostinger' },
      { icon: PenTool, title: 'Signature', caption: 'Électronique' },
      { icon: Banknote, title: 'Stripe', caption: 'Par marque' },
    ],
  },
]

export default function Slide07QuoteFlowArchitecture() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Q2 · Architecture</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">QuoteFlow AI — Architecture en couches</h1>
        </div>
        <p className="t-small max-w-[30cqw] text-right text-[var(--color-muted)]">
          Chaque couche a une responsabilité unique. Aucune ne décide à la place d’Odoo.
        </p>
      </div>

      <div className="mt-[1.3cqw] flex min-h-0 flex-1 flex-col justify-between gap-[0.45cqw]">
        {BANDS.map((band, bandIndex) => (
          <motion.div
            key={band.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + bandIndex * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-[9.5cqw_1fr] items-center gap-[0.8cqw]"
          >
            <div className="text-right">
              <div className="t-label">{band.label}</div>
              <div className="t-small text-[var(--color-muted)]">{band.hint}</div>
            </div>

            <div
              className={`grid gap-[0.45cqw] ${
                band.wide ? 'grid-cols-1' : band.cards.length === 6 ? 'grid-cols-6' : band.cards.length === 4 ? 'grid-cols-4' : 'grid-cols-3'
              } ${band.highlight ? 'rounded-[0.9cqw] border border-[var(--color-line-strong)] bg-[#fffefb] p-[0.45cqw]' : ''}`}
            >
              {band.cards.map((card) => (
                <NodeCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  caption={card.caption}
                  tone={band.highlight ? 'accent' : band.label === 'Intelligence' ? 'light' : 'light'}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
