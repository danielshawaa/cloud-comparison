import { getCategoryColor } from '../utils/styles'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const toggle = (cat: string) => onSelect(selected === cat ? '' : cat)

  return (
    <div className="flex flex-wrap gap-2">
      {/* "All" pill */}
      <button
        onClick={() => onSelect('')}
        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 transition
          ${selected === ''
            ? 'bg-aws-dark text-white ring-aws-dark'
            : 'bg-white text-gray-600 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50'
          }`}
      >
        All
      </button>

      {categories.map(cat => {
        const isActive = selected === cat
        const colorClass = getCategoryColor(cat)
        return (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 transition
              ${isActive
                ? `${colorClass} ring-current`
                : 'bg-white text-gray-600 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50'
              }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
