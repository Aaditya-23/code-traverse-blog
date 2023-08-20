'use client'

import { Context } from '@/lib/context/theme'
import { useContext } from 'react'

export default function useTheme() {
  const themeContext = useContext(Context)

  if (!themeContext)
    throw new Error('Theme should be used within the ThemeContextProvider')

  const { type, changeTheme } = themeContext

  return { theme: type, changeTheme }
}
