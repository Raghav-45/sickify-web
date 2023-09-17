'use client'

import { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}

export default Providers
