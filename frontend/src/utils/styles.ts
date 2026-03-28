const CATEGORY_COLORS: Record<string, string> = {
  'Compute':   'bg-blue-100 text-blue-700 ring-blue-200',
  'Storage':   'bg-purple-100 text-purple-700 ring-purple-200',
  'Database':  'bg-emerald-100 text-emerald-700 ring-emerald-200',
  'Networking':'bg-cyan-100 text-cyan-700 ring-cyan-200',
  'AI / ML':   'bg-amber-100 text-amber-700 ring-amber-200',
  'Security':  'bg-rose-100 text-rose-700 ring-rose-200',
  'Analytics': 'bg-indigo-100 text-indigo-700 ring-indigo-200',
  'DevOps':    'bg-teal-100 text-teal-700 ring-teal-200',
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] ?? 'bg-gray-100 text-gray-700 ring-gray-200'
}

export function getPricingBadgeStyle(model: string): string {
  return model === 'free-tier'
    ? 'bg-green-100 text-green-700'
    : 'bg-sky-100 text-sky-700'
}
