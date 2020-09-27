import { useState } from 'react'
import useDarkMode from 'use-dark-mode'

import { Theme } from '~/styles'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null)

  const { disable, enable, toggle } = useDarkMode(false, {
    onChange(isDark) {
      setTheme(isDark ? 'dark' : 'light')
    },
  })

  return {
    theme,
    enableLightTheme: disable,
    enableDarkTheme: enable,
    toggleTheme: toggle,
  }
}
