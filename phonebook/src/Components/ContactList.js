import {useState} from "react";
import Api from "../ApiConfig"


const ContactList = ({ isThemeToggled, isEdit, user, handleCheck, checkedContacts, isToggled, filteredRes }) => { 
    

    const handleStar = async(id) =>{
        try {
            const response = await fetch(`${Api}/user/${user}/favourites/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "fav_contact" :id ,
                }), 
            });            

        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <div >
            <p className="text-sm px-6 mt-6 mb-4 ">Contacts</p>
            <div className="px-6 pb-6 sticky overflow-y-scroll" style={{ maxHeight: "55vh", minHeight: "55vh", scrollbarWidth: "none" }} >
                {
                    [...filteredRes].sort((a, b) => a.contact_name.localeCompare(b.contact_name)).map((m, index) => (

                        isEdit ?
                            <div key={index} className="flex flex-row items-center">

                                <input
                                    className="mr-5 block w-4 h-4"
                                    type="checkbox"
                                    checked={checkedContacts.includes(m.id)}
                                    onChange={() => handleCheck(m.id)}
                                />

                                <div key={index} className="flex flex-col my-3 justify-end">
                                    <p className={isThemeToggled ? "text-md font-normal text-gray-200" : "text-md font-normal text-black"}>{m.contact_name}</p>
                                    {isToggled && <p className={isThemeToggled ? "text-xs text-gray-400" : "text-xs text-black"}>+{m.country_code} {m.contact_number}</p>}
                                    
                                </div>
                                <div className="flex-grow"></div>
                                <i className="bi bi-star flex items-center justify-center"  id={index} onClick={handleStar}></i>
                            </div>

                            : 
                            <div className="flex flex-row">
                                <div key={index} className="flex flex-col my-3">
                                    <p className={isThemeToggled ? "text-md font-normal text-gray-200" : "text-md font-normal text-black"}>{m.contact_name}</p>
                                    {isToggled && <p className={isThemeToggled ? "text-xs text-gray-400" : "text-xs text-black"}>+{m.country_code} {m.contact_number}</p>}
                                    
                                </div>
                                <div className="flex-grow"></div>
                                <i className="bi bi-star flex items-center justify-center "  id={index} onClick={() => handleStar(m.id)} ></i>
                            </div>
                            
                            
                    )
                    )

                }

            </div>
        </div>


    )
}

export default ContactList;