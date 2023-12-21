import Image from 'next/image'
import styles from './featured.module.css'

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Welcome to LionBlog </strong>
        Discover stories and creative ideas
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src='/p1.jpeg'
            alt='post image'
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Next Js 14 is awesome and cool and I love it
          </h1>
          <p className={styles.postDesc}>
            As of my last knowledge update in January 2022, Next.js 14 hadn't
            been released. However, I can provide you with a generic example of
            posting content in a Next.js application.
          </p>
          <button className={styles.button}>Read More..</button>
        </div>
      </div>
    </div>
  )
}
