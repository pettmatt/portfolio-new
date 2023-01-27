import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div id='error'>
      <h1>404 Error</h1>
      <p>Return to <Link href="/"><a>frontpage</a></Link>
      </p>
    </div>
  )
}