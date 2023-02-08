import './globals.css'
import Link from 'next/link'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <nav>
    <ul>
      <li>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact"  legacyBehavior>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
        { children }
      </body>
    </html>
  )
}
