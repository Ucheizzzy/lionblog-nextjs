import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'
export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.post}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}
