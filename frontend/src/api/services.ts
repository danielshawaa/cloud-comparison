import type { ServicesResponse, CategoriesResponse } from '../types'

const BASE_URL = 'http://localhost:8000/api'

export async function fetchServices(
  category?: string,
  search?: string,
): Promise<ServicesResponse> {
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (search) params.append('search', search)

  const url = `${BASE_URL}/services${params.toString() ? `?${params}` : ''}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch services: ${res.statusText}`)
  return res.json() as Promise<ServicesResponse>
}

export async function fetchCategories(): Promise<CategoriesResponse> {
  const res = await fetch(`${BASE_URL}/categories`)
  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.statusText}`)
  return res.json() as Promise<CategoriesResponse>
}
