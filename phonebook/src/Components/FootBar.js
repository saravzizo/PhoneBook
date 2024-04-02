
import React, { useState } from 'react'
import Api from "../ApiConfig"

const FootBar = ({user, checkedContacts,isEdit , handleFootBarClick, isThemeToggled}) => {

    const [isClicked, setIsClicked] = useState([true, false, false]);

    const handleClick = (index) => {
        const newIsClicked = [false, false, false];
        newIsClicked[index] = true;
        setIsClicked(newIsClicked);
        handleFootBarClick(index);
    };


    const fetchData = async () => {
        try {
            await fetch(`${Api}/user/${user}/contacts/`,
            {
                method:"DELETE",

                body: JSON.stringify({checkedContacts}),
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleDeleteButton =(e)=>{
        e.preventDefault();
        fetchData();
        window.location.reload();
        
    }



    return (
        <div>
            {
                isEdit ?
                    <div className="h-10 w-full flex items-center justify-center p-8 border-t border-gray-300 border-opacity-20 " style={{ position: "sticky", bottom: "0", backgroundColor: "black" }}>
                       <button className={checkedContacts.length === 0 ? `text-gray-500` : `text-blue-500` } onClick={handleDeleteButton}  disabled={checkedContacts.length === 0}>Delete</button>
                    </div>
                    :
                    <div className={isThemeToggled ? "h-10 w-full flex items-center justify-center p-8 border-t border-gray-300 border-opacity-20 " :"h-10 w-full flex items-center justify-center p-8 border-t border-black border-opacity-30 "} style={{ position: "sticky", bottom: "0" }}>

                        <div className="flex flex-col items-center justify-center mx-5 cursor-pointer" onClick={() => handleClick(0)}>
                            {isClicked[0] ? <div className='text-blue-500 text-center'>
                                <i className="bi bi-person-fill"></i>
                                <p className="text-xs">Contacts</p>
                            </div>
                                : <div className='text-center'>
                                    <i className="bi bi-person"></i>
                                    <p className="text-xs">Contacts</p>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center mx-5 cursor-pointer" onClick={() => handleClick(1)}>
                            {isClicked[1] ? <div className='text-blue-500 text-center'>
                                <i className="bi bi-star-fill"></i>
                                <p className="text-xs">Favourates</p>
                            </div>
                                : <div className='text-center'>
                                    <i className="bi bi-star"></i>
                                    <p className="text-xs">Favourates</p>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col items-center justify-center mx-5 cursor-pointer" onClick={() => handleClick(2)}>
                            {isClicked[2] ? <div className='text-blue-500 text-center'>
                                <i className="bi bi-trash-fill"></i>
                                <p className="text-xs">Deleted</p>
                            </div>
                                : <div className='text-center'>
                                    <i className="bi bi-trash"></i>
                                    <p className="text-xs">Deleted</p>
                                </div>
                            }
                        </div>
                    </div>
            }
        </div>

    )
}

export default FootBar;