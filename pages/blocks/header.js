import Head from 'next/head'
import Link from 'next/link'

export default function Header({ title, showBlogLink }) {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Collection of my projects and skills also known as portfolio." />
      <meta name="" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="PettMatt : Web Developer Portfolio" />
      <meta property="og:description" content="Collection of my projects and skills also known as portfolio." />
      <meta property="og:url" content="https://pettmatt.github.io/portfolio/" />
      <meta property="og:site_name" content="PettMatt" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="1 minute" />
      <title>PettMatt : { title }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav>
      <Link href="#" scroll={true}>
        <a className='inline'>PettMatt</a>
      </Link>
      <div className='inline'>
        { showBlogLink ? <a href="/blogs">Blogs</a> : '' }
        <Link href="#experience">
          <a>Experience</a>
        </Link>

        <Link href="#me" scroll={true}>
          <a>Me</a>
        </Link>
        
        <Link href="#contact" scroll={true}>
          <a>Contact</a>
        </Link>
      </div>
    </nav>

    </>
  )
}