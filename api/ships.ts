import { ApiResponse } from './shared'

export type Starship = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type ShipsParams = {
  page?: number
}
export async function fetchShips({
  page = 1
}: ShipsParams): Promise<ApiResponse<Starship>> {
  const url = new URL('https://swapi.dev/api/starships/')
  url.searchParams.append('page', page.toString())
  const res = await fetch(url)
  return res.json()
}
