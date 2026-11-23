import { motion } from 'framer-motion'
import { Camera, ClipboardList, Mic, ScanText, ArrowRight } from 'lucide-react'
import { Kicker, Stat, VArrow } from '../components/ui'

const FLOW = [
  { icon: ClipboardList, title: 'Visite technique', caption: 'Sur site, avec le client' },
  { icon: Mic, title: 'Technicien', caption: 'Dictée, notes, photos' },
  { icon: ScanText, title: 'Transcription', caption: 'Audio → texte' },
  { icon: Camera, title: 'QuoteFlow AI', caption: 'Extraction structurée' },
]

const VALUES = [
  { label: 'Surface', value: '450 m²' },
  { label: 'Zones', value: '3' },
  { label: 'Visites initiales', value: '4' },
  { label: 'Fréquence', value: 'Mensuelle' },
  { label: 'Accès', value: 'Arrière' },
]

export default function Slide09TechnicalVisit() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <Kicker>Q2 · Visite technique</Kicker>
        <h1 className="t-h1 mt-[0.6cqw] max-w-[66cqw]">
          Transformer l’expertise terrain en données exploitables
        </h1>
      </div>

      <div className="mt-[1.6cqw] grid min-h-0 flex-1 grid-cols-[1fr_1fr] gap-[2cqw]">
        {/* flow */}
        <div className="flex flex-col justify-center">
          {FLOW.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-[0.8cqw] rounded-[0.8cqw] border border-[var(--color-line)] bg-[#fffefb] px-[1cqw] py-[0.7cqw]">
                <step.icon size="1.15cqw" strokeWidth={1.6} className="text-[var(--color-ink-soft)]" />
                <div className="min-w-0">
                  <div className="t-body truncate font-medium">{step.title}</div>
                  <div className="t-small truncate text-[var(--color-muted)]">{step.caption}</div>
                </div>
              </div>
              {index < FLOW.length - 1 ? <VArrow height="0.7cqw" /> : null}
            </motion.div>
          ))}

          <div className="mt-[0.7cqw] flex items-center gap-[0.7cqw] rounded-[0.8cqw] border border-[var(--color-accent-deep)] bg-[var(--color-accent)] px-[1cqw] py-[0.7cqw]">
            <div className="t-small font-semibold text-[#23280f]">Données structurées → Odoo</div>
            <ArrowRight size="1cqw" strokeWidth={1.8} className="ml-auto text-[#3d4a12]" />
          </div>
        </div>

        {/* extracted values */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col rounded-[1.1cqw] border border-[var(--color-line)] bg-[#fffefb] p-[1.4cqw]"
        >
          <div className="flex items-center justify-between">
            <span className="t-label text-[var(--color-muted)]">Extrait de la visite</span>
            <span className="chip chip-accent">structured</span>
          </div>

          <div className="mt-[1.2cqw] flex-1 space-y-[0.85cqw]">
            {VALUES.map((value) => (
              <div key={value.label} className="flex items-baseline justify-between border-b border-[var(--color-line)] pb-[0.5cqw]">
                <Stat label={value.label} value={value.value} />
              </div>
            ))}
          </div>

          <div className="mt-[1cqw] rounded-[0.6cqw] bg-[var(--color-paper-2)] px-[0.8cqw] py-[0.6cqw]">
            <p className="t-small text-[var(--color-ink-soft)]">
              <span className="font-semibold">L’IA structure l’information technique.</span> Odoo reste
              responsable des produits, des prix, des taxes et des règles commerciales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
