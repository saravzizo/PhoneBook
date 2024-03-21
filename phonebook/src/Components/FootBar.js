
import React, { useState } from 'react'
const FootBar = () => {

    const [isClicked, setIsClicked] = useState([true, false, false]);

    const handleClick = (index) => {
        const newIsClicked = [false, false, false];
        newIsClicked[index] = true;
        setIsClicked(newIsClicked);
    };


    return (
        <div className="h-10 w-full flex items-center justify-center p-8 border-t border-gray-300 border-opacity-20 " style={{ position: "sticky", bottom: "0", backgroundColor: "black" }}>

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
                    <i className="bi bi-moon-stars-fill"></i>
                    <p className="text-xs">Theme</p>
                </div>
                    : <div className='text-center'>
                        <i className="bi bi-moon-stars"></i>
                        <p className="text-xs">Theme</p>
                    </div>
                }
            </div>

        </div>
    )
}

export default FootBar;