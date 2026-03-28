export interface AWSService {
  id: string
  name: string
  category: string
  description: string
  keyFeatures: string[]
  pricingNotes: string
  pricingModel: 'pay-as-you-go' | 'free-tier'
  useCase: string
  launchYear: number
}

export interface ServicesResponse {
  services: AWSService[]
  total: number
}

export interface CategoriesResponse {
  categories: string[]
}
