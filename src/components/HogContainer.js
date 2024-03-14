import HogCard from "./HogCard"
import Filter from "./Filter"
import { useState } from "react"

function HogContainer({hogs}){
    const [allHogs,setAllHogs] = useState(hogs)
    const [filterGreased, setFilterGreased] = useState(false)
    const [sort,setSort] = useState("name")

    allHogs.sort((a,b)=>{
        if(a[sort] < b[sort]){
            return -1
        }
        else if (b[sort] < a[sort]){
            return 1
        }
        else{
            return 0
        }

    })
    
    const filteredHogs = allHogs.filter((hog)=>{
        if(!filterGreased){
            return true
        }
        return hog.greased === filterGreased
    })

    const displayHogs = filteredHogs.map((hog,index)=>{
        return <HogCard key={index} hog={hog}/>
    })

    return(
        <div>
            <Filter setSort={setSort} setFilterGreased={setFilterGreased} filterGreased={filterGreased}/>
            <div className="ui grid container">
                {displayHogs}
            </div>
        </div>
    )
}
export default HogContainer