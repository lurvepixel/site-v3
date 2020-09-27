import { useCallback } from 'react'

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (v: T) => void] => {
  const onBrowser = typeof window === 'object'

  const setValue = useCallback(
    (v: T) => {
      if (onBrowser) localStorage.setItem(key, JSON.stringify(v))
    },
    [key, onBrowser]
  )

  let value = defaultValue

  if (onBrowser) {
    if (localStorage.getItem(key) == null) setValue(defaultValue)
    else value = JSON.parse(localStorage.getItem(key)!)
  }

  return [value, setValue]
}
