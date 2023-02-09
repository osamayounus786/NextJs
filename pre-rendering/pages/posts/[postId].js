function Post({posts}){
        return(
            <>
            <h2>
                {posts.id} {posts.title}
            </h2>
            <p>{posts.body}</p>
            </>
        )
}
export default Post;

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = response.json();

    return{
        props:{
            posts: data,
        },
    }
}