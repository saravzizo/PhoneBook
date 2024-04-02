const Search = ({ isThemeToggled, res, favClicked, binClicked, totalFav, totalDel }) => {

    let Totalcount = 0
    if (favClicked) {
        Totalcount = totalFav
    }
    else if (binClicked) {
        Totalcount = totalDel
    }
    else {
        Totalcount = res.length
    }

    const count = `Search among ${Totalcount} contact(s)`



    return (
        <div className={`mx-6 flex items-center rounded-lg py-1 ${isThemeToggled ? "text-black bg-gray-500" : "text-black bg-gray-200"}`}>
            <i className="bi bi-search px-2"></i>

            <input className="border-0 w-full font-noraml" type="text" placeholder={count} style={{ backgroundColor: "transparent", outline: "none" }}></input>
        </div>
    )
}

export default Search;