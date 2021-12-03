import Link from 'next/link'

export default function Footer({socials}) {
  return (
    <footer>
      <Link href="#" scroll={true}>
        <a>Going up?</a>
      </Link>
      { socials ? 
        <div id="socials">
          { socials.map(social => (
            <a key={social.id} href={social.link}>{social.name}</a>
          )) }
        </div>
      : ''}
    </footer>
  )
}