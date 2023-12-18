'use client'

import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useThemeContext } from '@/context/ThemeContext'
export default function ThemeToggle() {
  const { theme, toggle } = useThemeContext()
  console.log(theme)
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src='/sun.png' alt='sun' width={14} height={14} />
    </div>
  )
}
