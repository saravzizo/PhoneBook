const Search = () => {

    const Totalcount = 29
    const count = `Search among ${Totalcount} contact(s)`
    
    return (
        <div className="mx-6 flex items-center rounded-lg py-1 text-white"  style={{ backgroundColor: "#303030" }}>
            <i className="bi bi-search px-2"></i>

            <input className="border-0 w-full font-noraml" type="text" placeholder={count} style={{backgroundColor:"transparent",outline:"none"}}></input>
        </div>
    )
}

export default Search;