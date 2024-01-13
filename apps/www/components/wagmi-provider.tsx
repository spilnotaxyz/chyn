'use client'

import { ReactNode } from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, WagmiProvider as LibWagmiProvider, createConfig } from 'wagmi'
import {  mainnet } from 'wagmi/chains'

export const config = createConfig({
  ssr: true,
  transports: { [mainnet.id]: http() },
  chains: [mainnet],
})

export function WagmiProvider({ children }: { children: ReactNode }) {
  // Retrieved from the `trpc-provider.tsx`
  const [queryClient] = useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}>
    <LibWagmiProvider config={config}>{children}</LibWagmiProvider>
    </QueryClientProvider>
}
