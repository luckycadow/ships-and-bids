export type ApiResponse<T> = {
  count: number
  next: string
  previous: any
  results: T[]
}
