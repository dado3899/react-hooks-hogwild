import HogCard from "./HogCard"
import { useState } from "react"
function HogContainer({hogsData}){
    const [filterGreased,setFilterGreased] = useState(false)
    const [ sortType,setSortType ] = useState("name")
    // function compareFn(a, b) {
    //     if (a is less than b by some ordering criterion) {
    //       return -1;
    //     } else if (a is greater than b by the ordering criterion) {
    //       return 1;
    //     }
    //     // a must be equal to b
    //     return 0;
    //   }
    function compareFn(hogA,hogB){
        if(hogA[sortType] < hogB[sortType]){
            return -1
        }
        else if (hogA[sortType] > hogB[sortType]){
            return 1
        }
        return 0
    }

    const sortedHogs = hogsData.sort(compareFn)
    console.log(sortedHogs)
    const filteredHogs = hogsData.filter((hog)=>{
        if(filterGreased === false){
            return true
        }
        return hog.greased
    })

    const hogsCard = filteredHogs.map((hog)=>{
        // console.log(hog)
        return(
            <HogCard key={hog.name} individualHog={hog} />
        )
    })
    return (
    <div>
        <button onClick={()=>setFilterGreased(!filterGreased)}>
            {filterGreased? "Bring back all hogs" : "Filter Greased"}
        </button>
        <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="name">name</option>
            <option value="weight">weight</option>
        </select>
        {hogsCard}
    </div>
    )
}
export default HogContainer