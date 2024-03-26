import { useState, useEffect } from "react";
import Api from "../ApiConfig"


const Deleted =({user})=>{

    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/user/${user}/deleted`);
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
            <p className="text-sm px-6 mt-6 mb-4 ">Deleted contacts</p>
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

export default Deleted;