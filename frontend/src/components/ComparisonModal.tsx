import { useEffect } from 'react'
import type { AWSService } from '../types'
import { getCategoryColor, getPricingBadgeStyle } from '../utils/styles'

interface ComparisonModalProps {
  services: AWSService[]
  onClose: () => void
}

const ROW_LABEL = 'text-[11px] font-semibold uppercase tracking-widest text-gray-400'
const CELL = 'text-sm text-gray-700 leading-relaxed'

export default function ComparisonModal({ services, onClose }: ComparisonModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const colWidth = services.length === 2 ? 'w-1/2' : 'w-1/3'

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-aws-dark px-6 py-4">
          <h2 className="text-lg font-bold text-white">Service Comparison</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-36" />
              {services.map(s => <col key={s.id} className={colWidth} />)}
            </colgroup>

            {/* Service name headers */}
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-4 text-left" />
                {services.map(s => (
                  <th key={s.id} className="px-4 py-4 text-left align-top">
                    <div className="font-bold text-gray-900 text-base leading-snug">{s.name}</div>
                    <span
                      className={`mt-1.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${getCategoryColor(s.category)}`}
                    >
                      {s.category}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {/* Launch year */}
              <tr className="bg-gray-50/50">
                <td className={`px-4 py-3 ${ROW_LABEL}`}>Launched</td>
                {services.map(s => (
                  <td key={s.id} className={`px-4 py-3 ${CELL} font-medium`}>{s.launchYear}</td>
                ))}
              </tr>

              {/* Pricing model */}
              <tr>
                <td className={`px-4 py-3 ${ROW_LABEL}`}>Pricing Model</td>
                {services.map(s => (
                  <td key={s.id} className="px-4 py-3">
                    <span className={`rounded-md px-2 py-1 text-xs font-medium ${getPricingBadgeStyle(s.pricingModel)}`}>
                      {s.pricingModel === 'free-tier' ? '✦ Free' : '$ Pay-as-you-go'}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Description */}
              <tr className="bg-gray-50/50">
                <td className={`px-4 py-3 ${ROW_LABEL}`}>Description</td>
                {services.map(s => (
                  <td key={s.id} className={`px-4 py-3 ${CELL}`}>{s.description}</td>
                ))}
              </tr>

              {/* Key features */}
              <tr>
                <td className={`px-4 py-3 ${ROW_LABEL} align-top`}>Key Features</td>
                {services.map(s => (
                  <td key={s.id} className="px-4 py-3 align-top">
                    <ul className="space-y-1.5">
                      {s.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aws-orange" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Use cases */}
              <tr className="bg-gray-50/50">
                <td className={`px-4 py-3 ${ROW_LABEL}`}>Use Cases</td>
                {services.map(s => (
                  <td key={s.id} className={`px-4 py-3 ${CELL}`}>{s.useCase}</td>
                ))}
              </tr>

              {/* Pricing notes */}
              <tr>
                <td className={`px-4 py-3 ${ROW_LABEL} align-top`}>Pricing</td>
                {services.map(s => (
                  <td key={s.id} className={`px-4 py-3 ${CELL}`}>{s.pricingNotes}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
