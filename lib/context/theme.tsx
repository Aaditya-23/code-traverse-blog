'use client'

import { createContext, useState, useEffect } from 'react'

type Theme = 'system' | 'light' | 'dark'
type ThemeProvider = {
  type: Theme
  changeTheme(theme: Theme): void
}

export const Context = createContext<ThemeProvider | null>(null)

function getSystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

  return 'light'
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark'))
      return savedTheme

    return 'system'
  })

  function changeTheme(theme: Theme) {
    if (theme === 'dark' || theme === 'light') {
      localStorage.setItem('theme', theme)
      setTheme(theme)
      return
    }

    localStorage.removeItem('theme')
    setTheme('system')
  }

  useEffect(() => {
    const html = document.querySelector('html')
    const systemTheme = getSystemTheme()

    if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
      html?.classList.add('dark')
    else html?.classList.remove('dark')
  }, [theme])

  return (
    <Context.Provider
      value={{
        type: theme,
        changeTheme,
      }}
    >
      {children}
    </Context.Provider>
  )
}
