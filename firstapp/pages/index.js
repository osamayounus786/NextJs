import Link from "next/link"
export default function Home() {
    return (
        <>
        
        <Link href= '/' legacyBehavior>
        <a> Home</a>
        </Link>
        <Link href= '/products' legacyBehavior>
        <a>Products</a>
        </Link>
        <Link href= '/about' legacyBehavior>
        <a>About</a>
        </Link>
        <Link href= '/profile' legacyBehavior>
        <a>Profile</a>
        </Link>
        <h1>Home Page</h1>
        </>
    )
  }
  