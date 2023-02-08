import Link from "next/link";

export default function ProductList({ProductId = 100}) {
    return (
      <>
      <h1>
      <Link href='/products/1' legacyBehavior>
      <a>Product 1</a>
      </Link>  
      </h1>
        
      <h1>
      <Link href='/products/2' legacyBehavior>
      <a>Product 2</a>
      </Link>  
      </h1>
      <h1>
      <Link href='/products/3' legacyBehavior replace>
      <a>Product 3</a>
      </Link>  
      </h1>
      <h1>
      <Link href={`/products/${ProductId}`} legacyBehavior replace>
      <a>Product {ProductId}</a>
      </Link>  
      </h1>
            {/* checking */}
          </>
    )
  }
  