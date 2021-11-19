import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './blocks/header'
import Footer from './blocks/footer'

import Landing from './blocks/Landing'
import Experience from './blocks/Experience'
import Me from './blocks/Me'
import Contact from './blocks/Contact'

export default function Home() {
  return (
    <div className='container'>

      <main className={styles.main}>

        <Header title='Frontpage' />

        <Landing styles={styles} />

        <Experience />

        <Me />

        <Contact />

      </main>

      <Footer styles={styles} />
    </div>
  )
}
