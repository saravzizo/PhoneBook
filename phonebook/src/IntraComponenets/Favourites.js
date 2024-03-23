import React, { useEffect, useState } from "react"
import Api from "../ApiConfig"

const Favourites = () => {

    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/contacts/favourites`);
                const data = await response.json();
                setRes(data);
               

            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

   


    return (
        <div >
            <p className="text-sm px-6 mt-6 mb-4 ">Favourites contacts</p>
            <div className="px-6 mb-6  sticky overflow-y-scroll" style={{ maxHeight: "55vh", minHeight: "55vh", scrollbarWidth: "none" }} >

                 {
                    res.map((m,index) => 
                    
                    <div key={index} className="flex flex-col my-6">
                        <p className="text-md font-normal text-gray-200">{m.fav_Contacts}</p>
                    </div>
                    ) 
                }


            </div>
        </div>

    )
}

export default Favourites;