import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchShips } from '@/api/ships'
import { Spinner } from '@/components/Spinner'
import { ShipCard } from '@/components/ShipCard'

export default function Home() {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery({
    queryKey: ['ships', page],
    queryFn() {
      return fetchShips({ page })
    }
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <main className="min-h-screen max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.results.map((r) => (
            <ShipCard key={r.url} ship={r} />
          ))}
        </div>
        <div className="flex items-center">
          <div className="join mx-auto my-12">
            <button
              className="join-item btn"
              disabled={!data?.previous}
              onClick={() => setPage((p) => p - 1)}
            >
              «
            </button>
            <div className="join-item btn">Page {page}</div>
            <button
              className="join-item btn"
              disabled={!data?.next}
              onClick={() => setPage((p) => p + 1)}
            >
              »
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
