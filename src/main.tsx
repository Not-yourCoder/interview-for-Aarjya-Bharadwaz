import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DateRangeFilterProvider } from './context/DateRangeContext.tsx'
import { LaunchFilterProvider } from './context/LaunchType.tsx'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DateRangeFilterProvider>
        <LaunchFilterProvider>
          <App />
        </LaunchFilterProvider>
      </DateRangeFilterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
