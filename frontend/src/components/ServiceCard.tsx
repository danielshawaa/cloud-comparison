import type { AWSService } from '../types'
import { getCategoryColor, getPricingBadgeStyle } from '../utils/styles'

interface ServiceCardProps {
  service: AWSService
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const MAX_FEATURES = 4

  return (
    <article className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Card body */}
      <div className="flex-1 p-5">
        {/* Top row: name + pricing badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-snug">{service.name}</h2>
            <span
              className={`mt-1.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${getCategoryColor(service.category)}`}
            >
              {service.category}
            </span>
          </div>

          <span
            className={`shrink-0 rounded-md px-2 py-1 text-xs font-medium ${getPricingBadgeStyle(service.pricingModel)}`}
            title="Pricing model"
          >
            {service.pricingModel === 'free-tier' ? '✦ Free' : '$ Pay-as-you-go'}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>

        {/* Key features */}
        <div className="mb-4">
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Key Features
          </h3>
          <ul className="space-y-1.5">
            {service.keyFeatures.slice(0, MAX_FEATURES).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aws-orange"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feat}</span>
              </li>
            ))}
            {service.keyFeatures.length > MAX_FEATURES && (
              <li className="text-xs text-gray-400 pl-5">
                +{service.keyFeatures.length - MAX_FEATURES} more…
              </li>
            )}
          </ul>
        </div>

        {/* Use case */}
        <div>
          <h3 className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Use Cases
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">{service.useCase}</p>
        </div>
      </div>

      {/* Pricing footer */}
      <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
        <h3 className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          Pricing
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">{service.pricingNotes}</p>
      </div>
    </article>
  )
}
