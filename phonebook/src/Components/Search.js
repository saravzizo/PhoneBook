const Search = ({ isThemeToggled, res, favClicked, binClicked, totalFav, totalDel, searchTerm, setSearchTerm }) => {


    let Totalcount = 0
    let type = ""
    if (favClicked) {
        Totalcount = totalFav
        type = "favourite"
    }
    else if (binClicked) {
        Totalcount = totalDel
        type = "deleted contact"
    }
    else {
        Totalcount = res.length
        type = "contact"
    }

    const count = `Search among ${Totalcount} ${type}(s)`



    return (
        <div className={`mx-6 flex items-center rounded-lg py-1`} 
        style={{ backgroundColor: isThemeToggled ? '#303030' : '#d8d8d8', color: isThemeToggled? "white": "black"}}
        >
            <i className="bi bi-search px-2"></i>

            <input className="border-0 w-full font-noraml"
                type="text" placeholder={count}
                style={{ backgroundColor: "transparent", outline: "none" }}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}

            ></input>
        </div>
    )
}

export default Search;