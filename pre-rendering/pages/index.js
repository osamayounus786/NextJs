import Link from "next/link"

export default function Home() {
  return (
    <>
     <h1>Pre-Rendering</h1>

      <Link href='/users'>
        User
      </Link>
        <br />
      <Link href='/posts'>
          Post
      </Link>
     
    </>
  )
}
