import { useCallback, useRef } from 'react'
import { onServer } from '../helpers'

export const useLocalStorage = <T>(key: string): [T | null, (v: T) => void] => {
  const onBrowser = !onServer

  const setValue = useCallback(
    (v: T) => {
      if (onBrowser) localStorage.setItem(key, JSON.stringify(v))
    },
    [key, onBrowser]
  )

  const isInitialized = useRef(false)
  let initialValue = null

  if (onBrowser && !isInitialized.current) {
    isInitialized.current = true

    if (localStorage.getItem(key) != null) {
      initialValue = JSON.parse(localStorage.getItem(key)!)
    }
  }

  return [initialValue, setValue]
}
