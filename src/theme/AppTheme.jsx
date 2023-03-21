import { CssBaseline} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ Children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <CssBaseline />
          {Children}
    </ThemeProvider>
  )
}
