import { motion } from 'framer-motion'
import { ArrowRight, Inbox, Mail, Paperclip, RefreshCcw, Send, Users } from 'lucide-react'
import { Kicker } from '../components/ui'

const PROVIDERS = ['OVH', 'Titan', 'Hostinger']
const FEATURES = [
  { icon: Inbox, label: 'Entrants' },
  { icon: Send, label: 'Envoyés' },
  { icon: Users, label: 'Fils de discussion' },
  { icon: Paperclip, label: 'Pièces jointes' },
  { icon: RefreshCcw, label: 'Erreurs de synchro' },
]

export default function Slide11MailCenter() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Kicker>Q2 · Communication</Kicker>
          <h1 className="t-h1 mt-[0.6cqw]">Un mail center pour toutes les marques</h1>
        </div>
        <p className="t-small max-w-[28cqw] text-right text-[var(--color-muted)]">
          Slide courte : le point d’intégration, pas l’historique.
        </p>
      </div>

      <div className="mt-[2cqw] grid flex-1 grid-cols-[0.8fr_auto_1fr] items-center gap-[1.2cqw]">
        <div className="space-y-[0.6cqw]">
          {PROVIDERS.map((provider, index) => (
            <motion.div
              key={provider}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-[0.7cqw] rounded-[0.7cqw] border border-[var(--color-line)] bg-[#fffefb] px-[0.9cqw] py-[0.7cqw]"
            >
              <Mail size="1cqw" strokeWidth={1.6} className="text-[var(--color-ink-soft)]" />
              <span className="t-body font-medium">{provider}</span>
              <span className="t-small ml-auto text-[var(--color-muted)]">SMTP / IMAP</span>
            </motion.div>
          ))}
        </div>

        <ArrowRight size="1.3cqw" strokeWidth={1.4} className="text-[var(--color-line-strong)]" />

        <div className="card p-[1.3cqw]">
          <div className="flex items-center justify-between">
            <span className="t-label text-[var(--color-muted)]">ITB Mail Center · Odoo 19</span>
            <span className="chip chip-accent">centralisé</span>
          </div>

          <div className="mt-[1cqw] flex flex-wrap gap-[0.35cqw]">
            {FEATURES.map((feature) => (
              <span key={feature.label} className="chip">
                <feature.icon size="0.85cqw" strokeWidth={1.7} />
                {feature.label}
              </span>
            ))}
          </div>

          <div className="mt-[1.1cqw] grid grid-cols-4 gap-[0.5cqw] border-t border-[var(--color-line)] pt-[0.9cqw]">
            {['Client', 'Lead', 'Devis', 'Contrat'].map((target) => (
              <div key={target} className="rounded-[0.5cqw] bg-[var(--color-paper-2)] px-[0.5cqw] py-[0.5cqw] text-center">
                <span className="t-small font-medium">{target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-[var(--color-line)] pt-[1cqw]">
        <p className="t-h2">Un historique commercial unique, même avec plusieurs fournisseurs d’e-mail.</p>
      </div>
    </div>
  )
}
