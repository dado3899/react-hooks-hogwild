import HogTile from "./HogTile"
import FilterInfo from "./FilterInfo"
import { useState } from "react"
function HogContainer({hogs}){
    // Should we check if they are greased
    const [greased,setGreased] = useState(false)
    const [sortBy, setSortBy] = useState("name")
    // console.log(greased)
    // A B C D ... a b c d
    // console.log("Apple" < "Arange")
    hogs.sort((a,b)=>{
        const nameA = a[sortBy]; 
        const nameB = b[sortBy];
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    })
      

    const filteredHogs = hogs.filter((hog)=>{
        if(greased){
            if(hog.greased){
                return true
            }
            return false
        }
        return true
    })
    
    const tiles = filteredHogs.map((hog)=>{
        return <HogTile hog={hog}/>
    })

    return(
        <div>
            <FilterInfo setGreased={setGreased} setSortBy={setSortBy}/>
            <div className="ui link cards">
                {tiles}
            </div>
            
        </div>
    )
}

export default HogContainer