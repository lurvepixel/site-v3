import { createContext, useState, useEffect, useCallback, useLayoutEffect } from 'react'

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
  const defaultTheme: Theme = 'light'
  let darkQuery = '(prefers-color-scheme: dark)'

  const [initiallyStoredTheme, setStoredTheme] = useLocalStorage<Theme>('overriden-theme')
  let [theme, _setTheme] = useState<Theme>(defaultTheme)

  // doing this way is necessaary else react will complain that
  // it found different values on client and server (hydration)
  useLayoutEffect(() => {
    if (initiallyStoredTheme == null) {
      // if user has not customized the theme, use preference, don't set to local storage
      _setTheme(window.matchMedia(darkQuery).matches ? 'dark' : 'light')
    } else {
      _setTheme(initiallyStoredTheme)
    }
  }, [initiallyStoredTheme, darkQuery])

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
