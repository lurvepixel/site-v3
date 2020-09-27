import { createContext, useState, useEffect, useCallback } from 'react'

import { Theme } from '~/styles'
import { noop } from '~/utils/helpers'
import { FC, WC } from '~/common/types'
import { useLocalStorage } from '~/hooks/use-local-storage'

interface ThemeContextShape {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextShape>({
  theme: 'light',
  setTheme: noop,
})

// slightly modified version of https://gist.github.com/mjackson/05673df9963dd18a7ef6ccc035f07cf0
export const GlobalThemeProvider: FC<WC> = ({ children }) => {
  const defaultColorScheme: Theme = 'light'

  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>(
    'overriden-theme',
    defaultColorScheme
  )

  let darkQuery = '(prefers-color-scheme: dark)'
  let [theme, _setTheme] = useState<Theme>(
    typeof window === 'object' && window.matchMedia
      ? window.matchMedia(darkQuery).matches
        ? 'dark'
        : 'light'
      : storedTheme
  )

  const setTheme = useCallback(
    (theme: Theme) => {
      _setTheme(theme)
      setStoredTheme(theme)
    },
    [setStoredTheme]
  )

  useEffect(() => {
    function handleChange(event: MediaQueryListEvent) {
      setTheme(event.matches ? 'dark' : 'light')
    }

    if (window.matchMedia) {
      let mql = window.matchMedia(darkQuery)
      mql.addEventListener('change', handleChange)
      return () => {
        mql.removeEventListener('change', handleChange)
      }
    }
  }, [darkQuery, setTheme])

  return <ThemeContext.Provider value={{ theme, setTheme }} children={children} />
}
