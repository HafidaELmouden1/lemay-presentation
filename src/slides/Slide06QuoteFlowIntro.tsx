import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Kicker, StatusTag } from '../components/ui'

const LIFECYCLE = ['Lead', 'Visite', 'Devis', 'Signature', 'Paiement', 'Contrat', 'Opérations']

export default function Slide06QuoteFlowIntro() {
  return (
    <div className="flex h-full flex-col">
      <Kicker>Question 2 — Odoo 19</Kicker>
      <h1 className="t-display mt-[1.4cqw] max-w-[70cqw]">
        QuoteFlow AI <span className="text-[var(--color-line-strong)]">+</span> Odoo 19
      </h1>
      <p className="t-lead mt-[1cqw] max-w-[60cqw]">
        Un parcours commercial complet, pas un générateur de devis isolé.
      </p>

      <div className="mt-[2.4cqw] flex items-center gap-[0.6cqw]">
        {LIFECYCLE.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 items-center gap-[0.6cqw]"
          >
            <div
              className={`flex-1 rounded-[0.8cqw] border px-[0.7cqw] py-[0.9cqw] text-center ${
                index >= 3
                  ? 'border-[var(--color-line)] bg-[#fffefb]'
                  : 'border-[var(--color-line-strong)] bg-[var(--color-paper-2)]'
              }`}
            >
              <div className="mono t-label text-[var(--color-muted)]">{String(index + 1).padStart(2, '0')}</div>
              <div className="t-small mt-[0.25cqw] font-medium">{step}</div>
            </div>
            {index < LIFECYCLE.length - 1 ? (
              <ArrowRight size="0.9cqw" strokeWidth={1.5} className="shrink-0 text-[var(--color-line-strong)]" />
            ) : null}
          </motion.div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-[2cqw] border-t border-[var(--color-line)] pt-[1.2cqw]">
        <p className="t-h2 max-w-[52cqw]">
          Odoo reste la source de vérité métier : produits, prix, taxes, contrat.
        </p>
        <div className="flex items-center gap-[0.6cqw]">
          <StatusTag kind="REAL" />
          <span className="t-small text-[var(--color-muted)]">architecture Odoo 19 existante</span>
        </div>
      </div>
    </div>
  )
}
