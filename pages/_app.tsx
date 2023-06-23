import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="navbar sticky top-0 z-10 bg-neutral text-neutral-content mb-8">
        <div className="max-w-6xl w-full mx-auto px-4">
          <span className="text-xl text-bold">
            Ships<span className="text-primary text-2xl px-1">&</span>Bids
          </span>
          <div className="flex-1 flex justify-end items-center">
            <a className="btn btn-sm btn-primary" href="">
              Login
            </a>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
