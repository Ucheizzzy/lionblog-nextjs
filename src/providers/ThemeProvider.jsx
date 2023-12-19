'use client'
import { useThemeContext } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }) {
  const { theme } = useThemeContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) return <div className={theme}>{children}</div>
}
