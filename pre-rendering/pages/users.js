export default function Users(props){
    return(
        <>
        <h1> List Of Users</h1>
        {props.users.map((user) =>{
            return(
                <div key={props.id}>
                        <p>
                            Name: {user.name}
                        </p>
                        <p>
                            Email: {user.email}
                        </p>
                </div>
            )
        })}
        </>
    )
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
        return{
            props:{
                users: data,
            }
        }
}