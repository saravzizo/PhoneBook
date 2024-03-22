import React, { useEffect } from 'react'
import Api from '../ApiConfig'
import { useState } from 'react';


const Settings = ({ handleBack, user }) => {

    const [isToggled, setIsToggled] = useState(true);

    const handleNumberToggle = () => {
        setIsToggled(!isToggled);
    }

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(handleBack, 100);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/user/${user}/settings/`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: "GET"
                    });
                const res = await response.json();
                setIsToggled(res.Number_Feature_Flag)

            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);


    const handleApi = async () => {

        try {
            const response = await fetch(`${Api}/user/${user}/settings/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'PATCH',
                body: JSON.stringify({
                    "Number_Feature_Flag": !isToggled
                }),
            });
            const data = await response.json();

        } catch (error) {
            console.error("Error", error);
        }
    };


    return (

        <div className={`container bg-black text-white xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen ${isClosing ? "slide-out-from-left" : "slide-in-from-right"}`}>

            <div className="flex items-center p-6 justify-center border-b border-gray-300 border-opacity-20 font-bold text-xl">
                <i className="bi bi-chevron-left pr-3" onClick={handleClose}></i>
                <p>Settings</p>
                <span className='grow'></span>
            </div>

            <div className='mt-8 flex items-center px-6'>
                <p className='text-sm'>Display contact number</p>
                <span className='grow'></span>
                <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" checked={isToggled} onChange={handleNumberToggle} onClick={handleApi} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-500 appearance-none cursor-pointer" />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-500 cursor-pointer"></label>
                </div>
            </div>

        </div>
    )
}

export default Settings;