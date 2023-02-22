import Image from "next/image";

 
 const SingleEvent =  ({data}) =>{
    return(
        <div>
        <h1>{
           data.title
       }</h1>
       <Image src={
               data.image
           }
           width={1000}
           height={500}
           alt={
               data.title
           }
           priority
           />
      
       <p>{
           data.description
       }</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
   </div>
    )
 }

 export default SingleEvent;