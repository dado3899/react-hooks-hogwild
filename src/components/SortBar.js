function SortBar({greaseFlip,setSort, addHog}){

    function onSubmit(e){
        e.preventDefault()
        const new_hog = {
            "name": e.target.name.value,
            "specialty": "Something",
            "greased": false,
            "weight": 2.0,
            "highest_medal_achieved": "Bronze",
            "image":e.target.image.value
        }
        addHog(new_hog)
    }
    return(
        <div>
            <header>Greased 
                <input type="checkbox" onChange={()=>greaseFlip()}/>
            </header>
            <div>
                <button onClick={()=>setSort('name')}> Name </button>
                <button onClick={()=>setSort('weight')}> Weight </button>
                <button onClick={()=>setSort('specialty')}> Specialty </button>
            </div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <input name="name"></input>
                <input name="image"></input>
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}
export default SortBar