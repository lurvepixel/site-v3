import { useCallback, useRef } from 'react'
import { onServer } from '../helpers'

export const useLocalStorage = <T>(key: string): [T | null, (v: T) => void] => {
  const setValue = useCallback(
    (v: T) => {
      if (onServer) return
      localStorage.setItem(key, JSON.stringify(v))
    },
    [key]
  )

  const isInitialized = useRef(false)
  let initialValue = null

  const onBrowser = !onServer
  const isNotInitializedYet = isInitialized.current === false
  if (onBrowser && isNotInitializedYet) {
    isInitialized.current = true

    if (localStorage.getItem(key) != null) {
      initialValue = JSON.parse(localStorage.getItem(key)!)
    }
  }

  return [initialValue, setValue]
}
