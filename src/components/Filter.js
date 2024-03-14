function Filter({setSort,setFilterGreased,filterGreased}){
    return(
        <div>
            <p>
                Greased: 
                <input type="checkbox" onChange={()=>setFilterGreased(!filterGreased)}/>
            </p>
            <p>
                Sort by:
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value={'name'}>Name</option>
                    <option value={'weight'}>Weight</option>
                </select>
            </p>
        </div>
    )
}
export default Filter