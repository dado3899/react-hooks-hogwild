import { useState } from 'react'
function HogTile({hog}){
    const [details,setDetails] = useState(false)
    // specialty, weight, greased, and highest medal achieved
    return(
        <div className='ui grid container' onClick={()=>{setDetails(!details)}}>
            <h1 className='ui eight wide column'>{hog.name}</h1>
            <img className='ui eight wide column' src={hog.image}/>
            {details?
            <>
                <p className='ui eight wide column'>Specialty: {hog.specialty}</p>
                <p className='ui eight wide column'>Weight: {hog.weight}</p>
                <p className='ui eight wide column'>Greased: {hog.greased?"True":"False"}</p>
                <p className='ui eight wide column'>Highest Medal achieved: {hog['highest_medal_achieved']}</p>
            </>
             : <></>}
        </div>
    )
}
export default HogTile