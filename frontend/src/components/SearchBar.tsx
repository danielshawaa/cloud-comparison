interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
        <svg
          className="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 12.15 12.15z"
          />
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search services, features, or use cases…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm
                   placeholder:text-gray-400
                   focus:border-aws-orange focus:outline-none focus:ring-2 focus:ring-aws-orange/20
                   transition"
      />
    </div>
  )
}
