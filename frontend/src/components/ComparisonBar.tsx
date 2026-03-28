import type { AWSService } from '../types'
import { getCategoryColor } from '../utils/styles'

interface ComparisonBarProps {
  services: AWSService[]
  onRemove: (id: string) => void
  onClear: () => void
  onCompare: () => void
}

export default function ComparisonBar({
  services,
  onRemove,
  onClear,
  onCompare,
}: ComparisonBarProps) {
  if (services.length === 0) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-aws-dark border-t border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3 flex-wrap">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 shrink-0">
          Compare
        </span>

        {/* Selected service chips */}
        <div className="flex-1 flex items-center gap-2 flex-wrap">
          {services.map(s => (
            <div
              key={s.id}
              className="flex items-center gap-1.5 rounded-full bg-gray-700 pl-3 pr-2 py-1"
            >
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  getCategoryColor(s.category).split(' ')[0]
                }`}
              />
              <span className="text-sm text-white font-medium leading-none">{s.name}</span>
              <button
                onClick={() => onRemove(s.id)}
                className="ml-0.5 text-gray-400 hover:text-white transition-colors leading-none"
                aria-label={`Remove ${s.name}`}
              >
                ×
              </button>
            </div>
          ))}

          {/* Empty slot placeholders */}
          {Array.from({ length: 3 - services.length }).map((_, i) => (
            <div
              key={i}
              className="rounded-full border border-dashed border-gray-600 px-4 py-1 text-xs text-gray-500"
            >
              + add service
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Clear
          </button>
          <button
            onClick={onCompare}
            disabled={services.length < 2}
            className="rounded-lg bg-aws-orange px-4 py-2 text-sm font-semibold text-white
              hover:bg-aws-orange-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Compare {services.length > 0 ? `(${services.length})` : ''}
          </button>
        </div>
      </div>
    </div>
  )
}
