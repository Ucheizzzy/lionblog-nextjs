import MenuCategories from '../menuCategories/MenuCategories'
import MenuPost from '../menuPost/MenuPost'
import styles from './menu.module.css'
export default function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot?</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor's pick</h1>
      <MenuPost />
    </div>
  )
}
