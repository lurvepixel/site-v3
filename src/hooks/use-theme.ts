import { useContext } from 'react'

import { ThemeContext } from '~/services/theme-context'
import { Theme } from '~/styles'

export const useTheme = (): [Theme, (theme: Theme) => void] => {
  const { theme, setTheme } = useContext(ThemeContext)

  return [theme, setTheme]
}
