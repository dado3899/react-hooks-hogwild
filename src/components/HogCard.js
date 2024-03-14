import { useState } from "react"

function HogCard({hog}){
    const [details,setDetails] = useState(false)
    return(
        <div className="ui eight wide column" onClick={()=>setDetails(!details)}>
            <h1>{hog.name}</h1>
            <img className="card-image" src={hog.image}/>
            {
                details?
                <>
                    <p>{hog.specialty}</p>
                    <p>{hog.weight}</p>
                    <p>{hog.greased?"Is Greased":"Is Not Greased"}</p>
                    <p>{hog["highest medal achieved"]}</p>
                </>
                :
                <></>
            }
        </div>
    )
}
export default HogCard