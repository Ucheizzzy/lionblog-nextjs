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
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu} onClick={() => setOpen(!open)}>
          <Link href='/'>Home</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/about'>About</Link>
          {status === 'notAuthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <Link href='/logout' className={styles.link}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  )
}
