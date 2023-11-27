import HogTile from "./HogTile"
import SortBar from "./SortBar"
import { useEffect, useState } from "react"
function HogContainer(){
    const [hogs,setHogs] = useState([])
    const [greased, setGreased] = useState(false)
    const [sort,setSort] = useState('name')
    console.log(greased)

    useEffect(()=>{
        fetch('http://localhost:3001/hogs')
        .then(r=>r.json())
        .then(data=>setHogs(data))
    },[])

    function greaseFlip(){
        setGreased(!greased)
    }

    function addHog(newHog){
        fetch('http://localhost:3001/hogs',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newHog)
        })
        .then(r=>r.json())
        .then(data=>setHogs([...hogs,data]))
    }

    hogs.sort((a,b)=>{
        if(a[sort] > b[sort]){
            return 1
        }
        else if(a[sort] < b[sort]){
            return -1
        }
        return 0
    })

    const hogFilter = hogs.filter((hog)=>{
        if(greased){
            return hog.greased
        }
        return true  
    })

    const hogCards = hogFilter.map((hog)=>{
        return <HogTile key={hog.name} hog={hog}/>
    })

    return(
        <div>
            HogContainer
            <SortBar greaseFlip={greaseFlip} setSort={setSort} addHog={addHog}/>
            <div> ____________________________ </div>
            {/* Add multiple Hog Tiles */}
            {hogCards}
        </div>
    )
}
export default HogContainer