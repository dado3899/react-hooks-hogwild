import { useState } from "react"

function HogTile({hog}){

    const [details,setDetails] = useState(false)

    // console.log(hog)
    return(
        <div onClick={()=>setDetails(!details)} className="card">
            <img src={hog.image}/>
            <div>{hog.name}</div>
            {
                details ?
                <div>
                    <p>{hog.specialty}</p>
                    <p>{hog.greased ? "Greased" : "Not Greased"}</p>
                    <p>{hog.weight}</p>
                    <p>{hog["highest medal achieved"]}</p>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default HogTile