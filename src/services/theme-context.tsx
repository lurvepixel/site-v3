import { createContext, useState } from 'react'

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

export const GlobalThemeProvider: FC<WC> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  return <ThemeContext.Provider value={{ theme, setTheme }} children={children} />
}
