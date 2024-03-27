import React, { useEffect, useState } from "react"
import Api from "../ApiConfig"

const Favourites = ({ user }) => {

    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/user/${user}/favourites`);
                const data = await response.json();
                setRes(data);


            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, [user]);




    return (
        <div >
            <p className="text-sm px-6 mt-6 mb-4 ">Favourites contacts</p>
            <div className="px-6 mb-6  sticky overflow-y-scroll" style={{ maxHeight: "55vh", minHeight: "55vh", scrollbarWidth: "none" }} >

                {
                    [...res].sort((a, b) => a.contact_name.localeCompare(b.contact_name)).map((m,index) => 

                        <div key={index} className="flex flex-col my-6">
                            <p className="text-md font-normal text-gray-200">{m.contact_name}</p>
                            <p className="text-xs text-gray-400">+{m.country_code} {m.contact_number}</p>
                        </div>
                    )
                }


            </div>
        </div>

    )
}

export default Favourites;