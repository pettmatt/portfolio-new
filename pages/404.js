import Link from 'next/link'

export default function PageNotFound() {
  return (
    <>
      <h1>404 Error</h1>
      <p>Please return to 
        <Link href="/">
          <a>frontpage</a>
        </Link>
      </p>
    </>
  )
}