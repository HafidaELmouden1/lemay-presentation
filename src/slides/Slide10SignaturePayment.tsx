import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Banknote, FileCheck2, Layers, PenTool } from 'lucide-react'
import { Kicker } from '../components/ui'

const CARDS = [
  {
    icon: FileCheck2,
    step: '01',
    title: 'Devis',
    items: ['Catalogue produits Odoo', 'Liste de prix et taxes', 'Validation humaine'],
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Signature',
    items: ['Lien sécurisé', 'Signature électronique', 'Contrat signé archivé'],
  },
  {
    icon: Banknote,
    step: '03',
    title: 'Paiement',
    items: ['Stripe par marque', 'Lien de paiement', 'Webhook de confirmation'],
  },
]

export default function Slide10SignaturePayment() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Q2 · Commercialisation</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">Du devis validé au contrat actif</h1>
        </div>
        <p className="t-small max-w-[30cqw] text-right text-[var(--color-muted)]">
          Trois systèmes, trois responsabilités, un seul parcours.
        </p>
      </div>

      <div className="mt-[1.8cqw] grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-[0.6cqw]">
        {CARDS.map((card, index) => (
          <div key={card.title} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + index * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="card flex flex-col p-[1.2cqw]"
            >
              <div className="flex items-center justify-between">
                <card.icon size="1.2cqw" strokeWidth={1.6} className="text-[var(--color-ink-soft)]" />
                <span className="mono t-label text-[var(--color-muted)]">{card.step}</span>
              </div>
              <div className="t-h2 mt-[0.8cqw]">{card.title}</div>
              <ul className="mt-[0.7cqw] space-y-[0.35cqw]">
                {card.items.map((item) => (
                  <li key={item} className="t-small flex gap-[0.45cqw] text-[var(--color-ink-soft)]">
                    <span className="opacity-40">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            {index < CARDS.length - 1 ? (
              <div className="flex items-center justify-center">
                <ArrowRight size="1.1cqw" strokeWidth={1.4} className="text-[var(--color-line-strong)]" />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-[1.1cqw] flex items-center gap-[1cqw] rounded-[0.9cqw] bg-[var(--color-night)] px-[1.4cqw] py-[0.9cqw] text-[#eceae0]"
      >
        <BadgeCheck size="1.2cqw" strokeWidth={1.7} className="text-[var(--color-accent)]" />
        <span className="t-body font-medium">Contrat actif</span>
        <ArrowRight size="0.9cqw" strokeWidth={1.6} className="text-[#8d9284]" />
        <span className="t-small text-[#b9beab]">Planification des interventions · suivi · récurrences</span>
      </motion.div>

      <div className="mt-auto grid grid-cols-[auto_1fr] items-center gap-[1.5cqw] border-t border-[var(--color-line)] pt-[1cqw]">
        <div className="flex items-center gap-[0.6cqw]">
          <Layers size="1cqw" strokeWidth={1.7} className="text-[var(--color-ink-soft)]" />
          <span className="t-label text-[var(--color-muted)]">Principe multi-marque</span>
        </div>
        <div className="flex items-center gap-[0.5cqw] text-[var(--color-ink-soft)]">
          <span className="t-small font-medium">marque commerciale</span>
          <ArrowRight size="0.8cqw" strokeWidth={1.6} className="text-[var(--color-line-strong)]" />
          <span className="t-small">e-mail</span>
          <ArrowRight size="0.8cqw" strokeWidth={1.6} className="text-[var(--color-line-strong)]" />
          <span className="t-small">documents</span>
          <ArrowRight size="0.8cqw" strokeWidth={1.6} className="text-[var(--color-line-strong)]" />
          <span className="t-small">configuration Stripe</span>
          <span className="t-small ml-auto text-[var(--color-muted)]">Chaque marque garde son identité.</span>
        </div>
      </div>
    </div>
  )
}
