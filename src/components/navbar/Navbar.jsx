import Image from 'next/image'
import styles from './navbar.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'
import AuthLinks from '../authlinks/AuthLinks'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={20} height={20} />
        <Image src='/instagram.png' alt='instagram' width={20} height={20} />
        <Image src='/tiktok.png' alt='tiktok' width={20} height={20} />
        <Image src='/youtube.png' alt='youtube' width={20} height={20} />
      </div>
      <div className={styles.logo}>Lion Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>
          Home
        </Link>
        <Link href='/contact' className={styles.link}>
          Contact
        </Link>
        <Link href='/about' className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}
