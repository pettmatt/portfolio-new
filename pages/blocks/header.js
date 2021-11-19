import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Header({ title }) {
  return (
    <>
    <Head>
      <title>PettMatt : { title }</title>
      <meta name="description" content="Portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href={styles} />
    </Head>

    <nav>
      <a href="#" className='inline'>Pettmatt.</a>
      <div className='inline'>
        <a href="#">Articles</a>
        <a href="#">Experience</a>
        <a href="#">Me</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    </>
  )
}