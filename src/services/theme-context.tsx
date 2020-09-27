import { createContext, useState, useEffect } from 'react'

import { Theme } from '~/styles'
import { noop } from '~/utils/helpers'
import { FC, WC } from '~/common/types'

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

  let darkQuery = '(prefers-color-scheme: dark)'
  let [theme, setTheme] = useState<Theme>(
    typeof window === 'object' && window.matchMedia
      ? window.matchMedia(darkQuery).matches
        ? 'dark'
        : 'light'
      : defaultColorScheme
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
  }, [darkQuery])

  return <ThemeContext.Provider value={{ theme, setTheme }} children={children} />
}
