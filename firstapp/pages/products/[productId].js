import { useRouter } from "next/router"
export default function DynamicProducts() {
    const router = useRouter();
    const {productId} = router.query;
    // const productId = router.query.productId; // both works same
    return (
      <>
      <h1>Product Details {productId}</h1>
      </>
    )
  }
  