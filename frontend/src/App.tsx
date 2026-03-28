import { useState, useEffect, useCallback } from 'react'
import type { AWSService } from './types'
import { fetchServices, fetchCategories } from './api/services'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ServiceCard from './components/ServiceCard'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [services, setServices] = useState<AWSService[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Debounce the search input by 300ms
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Load categories once on mount
  useEffect(() => {
    fetchCategories()
      .then(data => setCategories(data.categories))
      .catch(() => {/* categories are non-critical */})
  }, [])

  // Reload services whenever filters change
  const loadServices = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchServices(
        selectedCategory || undefined,
        debouncedSearch || undefined,
      )
      setServices(data.services)
      setTotal(data.total)
    } catch {
      setError('Could not reach the backend. Make sure it is running on http://localhost:8000.')
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, debouncedSearch])

  useEffect(() => { loadServices() }, [loadServices])

  const clearFilters = () => {
    setSelectedCategory('')
    setSearchQuery('')
  }

  const hasFilters = selectedCategory !== '' || searchQuery !== ''

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + clear */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-aws-orange hover:text-aws-orange-dark transition-colors whitespace-nowrap"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Category pills */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Results count */}
        <p className="mt-5 mb-4 text-sm text-gray-500">
          {loading
            ? 'Loading…'
            : `${total} service${total !== 1 ? 's' : ''}${hasFilters ? ' found' : ''}`}
        </p>

        {/* Main content */}
        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 text-sm">
            {error}
          </div>
        ) : loading ? (
          <LoadingSpinner />
        ) : services.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-medium">No services match your filters.</p>
            <button onClick={clearFilters} className="mt-2 text-sm text-aws-orange hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
