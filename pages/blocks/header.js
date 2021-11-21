import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Header({ title, showBlogLink }) {
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
        { showBlogLink ? <a href="/blogs">Blogs</a> : '' }
        <a href="#experience">Experience</a>
        <a href="#me">Me</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    </>
  )
}