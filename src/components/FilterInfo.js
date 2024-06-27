function FilterInfo({setGreased,setSortBy}){
    return(
        <header>
            <label>Greased: </label>
            <input type="checkbox" onChange={(e)=>setGreased(e.target.checked)}/>
            <label>Sort By: </label>
            <button onClick={()=>setSortBy("name")}>Name</button>
            <button onClick={()=>setSortBy("weight")}>Weight</button>
            <button onClick={()=>setSortBy("specialty")}>specialty</button>
        </header>
    )
}
export default FilterInfo