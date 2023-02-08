import { useRouter } from "next/router";
function Docs(){
    const router =  useRouter();
    const {params = []}= router.query;
    console.log(params);
    if(params.length === 2){
        return (
            <h1>Documents for 2 feaatures only  {params[0]} {params[1]} </h1>
        )
    }
    else if(params.length === 1){
        return (
            <h1>Documents for 1 feaatures only  {params[0]}</h1>
        )
    }
    return(
        <>
        <h1>

        Documents of projects
        </h1>
        </>
    )
}
export default Docs;