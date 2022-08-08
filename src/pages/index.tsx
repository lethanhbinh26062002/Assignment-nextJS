import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default Home
