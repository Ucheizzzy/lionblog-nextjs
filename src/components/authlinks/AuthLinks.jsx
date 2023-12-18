'use client'
import styles from './authlinks.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function AuthLinks() {
  const [open, setOpen] = useState(false)
  const status = 'notAuthenticated'
  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={status.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  )
}
