import { useRouter } from "next/router";


function Blog(){

    const router = useRouter();
    const {blogNo} = router.query;
    return(
        <>
        <h1>
            Hello Welcome to Blog No: {blogNo}
        </h1>
        </>
    )
}

export default Blog;