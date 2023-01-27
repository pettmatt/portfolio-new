import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header({ title, showBlogLink }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMenu = () => {
    (showMobileMenu) ?
    setShowMobileMenu(false) :
    setShowMobileMenu(true)
  }

  return (
    <>
    <Head>
      <meta charSet='UTF-8' />
      <meta name='description' content='Collection of my projects and skills also known as portfolio.' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:image' content='https://portfolio-2021-dod0vijx1-pettmatt.vercel.app/icon.png' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:title' content='Pettmatt : Web Developer' />
      <meta property='og:description' content='Collection of my projects and skills also known as portfolio.' />
      <meta property='og:site_name' content='Pettmatt' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:label1' content='Est. reading time' />
      <meta name='twitter:data1' content='3 minute' />
      <title>Pettmatt : { title }</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <nav>
      <Link href='/#' scroll={true}>
        <a className='inline'>pettmatt</a>
      </Link>
      <Links menuClassName='inline wide-menu' showbloglink={ showBlogLink.toString() } />

      <div className='burger-container inline'>
        <button id='burger-button' onClick={ toggleMenu }>
          <Image src='/menu-icon.svg' alt='Burger-menu icon' width={50} height={50} />
        </button>
      </div>

      { showMobileMenu &&
        <Links menuClassName='narrow-menu' showbloglink={ showBlogLink.toString() } />
      }
    </nav>
    </>
  )
}

const Links = ({ menuClassName, showbloglink }) => {
  return (
    <div className={ menuClassName }>
      { Boolean('true' === showbloglink) ? <Link href='/blogs'>
        <a>Blogs</a>
      </Link> : '' }
      <Link href='/#experience'>
        <a>Experience</a>
      </Link>

      <Link href='/#me' scroll={true}>
        <a>Me</a>
      </Link>
      
      <Link href='/#links' scroll={true}>
        <a>Links</a>
      </Link>
    </div>
  )
}