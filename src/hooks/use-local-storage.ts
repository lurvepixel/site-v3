export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const onBrowser = typeof window === 'object'

  const setValue = (v: T) => {
    if (!onBrowser) return v

    localStorage.setItem(key, JSON.stringify(v))
    return v
  }

  const value: T = onBrowser
    ? localStorage.getItem(key) == null
      ? setValue(initialValue)
      : JSON.parse(localStorage.getItem(key)!)
    : initialValue

  return [value, setValue]
}
