import React, { useEffect } from "react"
import { useState } from "react";
import Search from "./Search"
import ContactList from "./ContactList";
import FootBar from "./FootBar";
import Settings from "../IntraComponenets/Settings"
import CreateContacts from "../IntraComponenets/CreateContact";
import Api from "../ApiConfig"
import Favourites from "../IntraComponenets/Favourites";
import Deleted from "../IntraComponenets/Deleted";


const Home = () => {
    const [user, setUser ] = useState()
    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Api}/contacts/`);
                const data = await response.json();
                setRes(data);
                setUser(data[0].user);
                let user = (data[0].user)
                
                const res = await fetch(`${Api}/user/${user}/settings/`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: "GET"
                    });
                const r = await res.json();
                setIsToggled(r.Number_Feature_Flag)
    
            } catch (error) {
                console.error("Error", error);
            }
        };

       
        fetchData();
        
    }, []);



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

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () =>{
        setTimeout(() => {
        setIsEdit(true);
        },100);
    }

    const [checkedContacts, setCheckedContacts] = useState([]);

    const handleCheck = (id) => {
        setCheckedContacts(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(contactId => contactId !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleSelectAll = () => {
        if (checkedContacts.length === res.length) {
            setCheckedContacts([]);
        } else {
            setCheckedContacts(res.map((m,index ) => index));
        }
    };



    const [isToggled, setIsToggled] = useState(true);

    const handleNumberToggle = () => {
        setIsToggled(!isToggled);
    }



    const [favClicked, setFavClicked] = useState(false);
    const [binClicked, setBinClicked] = useState(false);

    const handleFootBarClick =(index) =>{
        if(index == 0){
            setFavClicked(false);
            setBinClicked(false);
        }
        else if(index ==1){
            setFavClicked(true);
        }
        else{
            setFavClicked(false)
            setBinClicked(true);
        }

    }

    return (

        <>
            {showSettings ? <Settings handleBack={handleSettingsBack} user={user} isToggled = {isToggled} handleNumberToggle= {handleNumberToggle} />

                : showPlus ? <CreateContacts handlePlusBack={handlePlusBack}  />

                    :
                        <div className="container bg-black text-white xs:w-1/2 sm:w-2/3 lg:w-1/3 h-screen " >
                            <div className="sticky">
                                <div className="flex items-center px-6 mb-6 justify-center pt-8 pb-3">

                                    {isEdit ? <p className="text-lg font-semibold" onClick={handleSelectAll}>Select All</p> : <p className="text-2xl font-semibold">Contacts</p>}
                                    
                                    <span className="grow "></span>
                                    {isEdit ? <p className="text-lg font-semibold cursor-pointer" onClick={() => setIsEdit(false)}>Cancel</p> : null}

                                    {!isEdit && <p className="text-xl font-semibold pl-5 cursor-pointer" onClick={handleEdit}>Edit</p>}
                                    {!isEdit && <p className="text-3xl px-5 cursor-pointer"><i className="bi bi-plus" onClick={handlePlus}></i></p>}
                                    {!isEdit && <p className="text-xl cursor-pointer"><i className="bi bi-gear" onClick={handleSettings}></i></p>}
                                </div>

                                <Search />

                                <div className="flex items-center px-6 mt-10 cursor-pointer ">
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

                            {favClicked ? <Favourites user={user}/>
                            
                            :binClicked ? <Deleted />
                            : <ContactList isEdit= {isEdit} res= {res}  handleCheck= {handleCheck}  checkedContacts={checkedContacts} isToggled= {isToggled}/> }
                            <FootBar  isEdit= {isEdit} handleFootBarClick={handleFootBarClick}/>
                        </div>

                       

            }



        </>

    )
}

export default Home;