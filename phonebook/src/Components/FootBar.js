const FootBar =() =>{
    return (
        <div className="h-10 w-full flex items-center justify-center p-8 border-t border-gray-300 border-opacity-20 " style={{position:"sticky", bottom:"0",backgroundColor:"black"}}>
            
            <div className="flex flex-col items-center justify-center mx-5 ">
                <i className="bi bi-star"></i>
                <p className="text-xs">Favorites</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-5 ">
                <i class="bi bi-moon-stars"></i>
                <p className="text-xs">Theme</p>
            </div>
           
           
            
            

        </div>
    )
}

export default FootBar;