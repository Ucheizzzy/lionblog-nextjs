import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' fill alt='image' className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>09/29/2022 -</span>
          <span className={styles.category}>travel</span>
        </div>
        <Link href={`/posts/`}>
          <h1>Blogging is fun..</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          consectetur?
        </p>
        <Link href='/post' className={styles.link}>
          Read more.
        </Link>
      </div>
    </div>
  )
}
