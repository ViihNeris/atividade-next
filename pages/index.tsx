import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { H1, H2, H3 } from '../components/index';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <H1 />
        <H2 />
        <H3 />
      </div>
    </div>
  )
}

export default Home;
