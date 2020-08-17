import { useContext } from 'react'
import { ThemeContext } from 'services/theme-context'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return [theme, setTheme]
}
