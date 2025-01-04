'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
        api_host: 'https://app.posthog.com',
      })
      setIsLoaded(true)
    }
  }, [])

  if (!isLoaded) {
    return null
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}

export function useFeatureFlag(flagName: string): boolean {
  const [flagValue, setFlagValue] = useState(false)

  useEffect(() => {
    const checkFlag = async () => {
      const value = await posthog.isFeatureEnabled(flagName)
      setFlagValue(value)
    }

    checkFlag()
  }, [flagName])

  return flagValue
}

