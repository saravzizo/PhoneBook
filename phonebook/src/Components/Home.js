import React from "react"
import { useState } from "react";
import Search from "./Search"
import ContactList from "./ContactList";
import FootBar from "./FootBar";
import Settings from "../IntraComponenets/Settings"
import CreateContacts from "../IntraComponenets/CreateContact";

const Home = () => {

    const [showSettings, setShowSettings] = useState(false);
    const handleSettings = () => {
        setShowSettings(true);
    }
    const handleSettingsBack = () => {
        setShowSettings(false);
    };


    const [showPlus, setShowPlus] = useState(false);
    const handlePlus = () => {
        setShowPlus(true);
    }
    const handlePlusBack = () => {
        setShowPlus(false);

    }

    return (

        <>
            {showSettings ? <Settings handleBack={handleSettingsBack} />

                : showPlus ? <CreateContacts handlePlusBack={handlePlusBack} />

                    : <div className="container bg-black text-white  xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen " >
                        <div className="sticky">
                            <div className="flex items-center px-6 mb-6 justify-center pt-8 pb-3">
                                <p className="text-2xl font-semibold">Contacts</p>
                                <span className="grow "></span>
                                <p className="text-xl font-semibold pl-5 cursor-pointer">Edit</p>
                                <p className="text-3xl px-5 cursor-pointer"><i className="bi bi-plus" onClick={handlePlus}></i></p>
                                <p className="text-xl cursor-pointer"><i className="bi bi-gear" onClick={handleSettings}></i></p>
                            </div>

                            <Search />

                            <div className="flex items-center px-6 mt-6 cursor-pointer ">
                                <p className="text-sm">vivo Customer Care</p>
                                <span className="grow"></span>
                                <i className="text-sm bi bi-chevron-right"></i>
                            </div>

                            <div className="flex items-center px-6 mt-6 cursor-pointer">
                                <p className="text-sm">Personal data</p>
                                <span className="grow"></span>
                                <i className="text-sm bi bi-chevron-right"></i>
                            </div>

                        </div>

                        <ContactList />
                        <FootBar />
                    </div>
            }



        </>

    )
}

export default Home;