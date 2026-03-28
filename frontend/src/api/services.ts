import type { ServicesResponse, CategoriesResponse } from '../types'
import { AWS_SERVICES, CATEGORIES } from '../data/awsServices'

export async function fetchServices(
  category?: string,
  search?: string,
): Promise<ServicesResponse> {
  let results = AWS_SERVICES

  if (category) {
    results = results.filter(s => s.category.toLowerCase() === category.toLowerCase())
  }

  if (search) {
    const q = search.toLowerCase()
    results = results.filter(
      s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.keyFeatures.some(f => f.toLowerCase().includes(q)) ||
        s.useCase.toLowerCase().includes(q),
    )
  }

  return { services: results, total: results.length }
}

export async function fetchCategories(): Promise<CategoriesResponse> {
  return { categories: CATEGORIES }
}
